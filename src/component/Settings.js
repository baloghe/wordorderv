import React from "react";
import TopicPane from './TopicPane.js';
import './Settings.css';

export default class Settings extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			titles: this.getTitlesFromProps(),
			activeTitle:this.props.activeTitle == null ? 0 : this.props.activeTitle,
			isRandOrder: this.props.isRandOrder || false,
			qLang: props.qLang,
			aLang: props.aLang
		};
    }   
    
  getTitlesFromProps = () => {
  	return this.props.topics.map(e => 
    					{return {title: e.title, cnt: e.cnt};});
  }
  
  loadFile = (e) => {
  	let selectedFile = e.target.files[0];
    this.state.reader = new FileReader();
    this.state.reader.readAsText(selectedFile);
    this.state.reader.onloadend = this.parseXml;
  }
  
  parseXml = () => {
    const parser = new DOMParser();
    const dbMetadata = parser.parseFromString(this.state.reader.result,"text/xml");
    let root = dbMetadata.children[0];
    
    let ndlang = root.getElementsByTagName("languages")[0];
    let langs=[];
    for(let ch of ndlang.children){
    	langs.push(ch.getAttribute('id'));
    }

    let ndsub = root.getElementsByTagName("subjects")[0];
    
    let ret = {languages: langs, topics: []};
    for(let ch of ndsub.children){
      ret.topics.push({id: ch.getAttribute('id'),
                       title: ch.getAttribute('name')});
    }

    let ndsent = root.getElementsByTagName("sentences")[0];
    let subcnt = [];
    for(let ch of ndsent.children){
      let sents = [];
      for(let chx of ch.children){
      	let s={};
      	for(let chy of chx.children){
        	let lang = chy.getAttribute('lang');
          s[lang] = chy.getAttribute('txt').replace(/\[\//g,'').replace(/\/\]/g,'');
        }//chy
        sents.push(s);
      }
      subcnt.push({id: ch.getAttribute('subjectID'),
                   cnt: ch.children.length,
                   sentences: sents
                   });
    }
    ret.topics.forEach(x => {
      x.cnt = subcnt.filter(y => y.id==x.id)[0].cnt;
      x.sentences = subcnt.filter(y => y.id==x.id)[0].sentences;
    });
    
    //console.log(JSON.stringify(ret));

	if(this.checkLoadedStruct(ret)){
		this.props.fileLoaded(ret);
	}
  }
  
  checkLoadedStruct = (s) => {
	try {
		let ret = true;
		//exactly 2 languages
		ret = ret && s.languages.length == 2;
		for(let x of s.languages){
			ret = ret && x!= undefined && x!= null && x.trim().length > 0;
		}
		
		//at least one topic is present
		ret = ret && s.topics.length > 0;
		
		//each topic has a name
		//each topic has at least one sentence
		for(let x of s.topics){
			ret = ret && x.title != undefined && x.title != null && x.title.trim().length > 0
				&& x.sentences != undefined && x.sentences.length > 0
				;
			//each sentence has two variants corresponding to the language codes
			for(let y of x.sentences){
				ret = ret && y[s.languages[0]] != undefined;
				ret = ret && y[s.languages[1]] != undefined;
			}
		}
		return ret;
    } catch(error) {
		return false;
	}
  }
  
  selectedTitleChanged = (newIdx) => {
  	//console.log(`newIdx=${newIdx}`);
  	this.setState({
    	activeTitle: newIdx
    });
  }
  
  setRandOrder = () => {
  	this.setState({
    	isRandOrder: !this.state.isRandOrder
    });
  }
  
  changeLang = () => {
  	let [newQLang, newALang] = [this.state.aLang, this.state.qLang];
    this.setState({
    	qLang: newQLang,
      aLang: newALang
    });
    
    this.props.setLang([newQLang, newALang]);
  }
  
  startTest = () => {
    let actTitle = this.state.activeTitle;
    let actRand = this.state.isRandOrder;
  	//console.log(`Start test no. ${actTitle}: ${this.props.topics[this.state.activeTitle].title}, random: ${actRand}`);
    this.props.startTest(actTitle, actRand);
  }
    
  render() {
  	return (
    	<div className="settings">
        <h3>Choose a topic!</h3>
        <TopicPane
          topics={this.props.topics}
          activeTitle={this.state.activeTitle}
          selectedTitleChanged={this.selectedTitleChanged}
        />
        <div className="chkbx">  
          <label key="labFromFile" htmlFor="fromFile">
            Load XML: 
          </label>      
          <input 
            key="fromFile"
            type="file"
            id="fromFile"
            name="fromFile"
            onChange={this.loadFile}
          />
        </div>
		<div className="chkbx">
          <label key="labRandOrder" htmlFor="randOrder">
            Random order
          </label>
          <button onClick={this.changeLang}>
          <span>{this.state.qLang} &rarr; {this.state.aLang}</span>
          </button>
        </div>
        <div className="chkbx">
          <input
            key="randOrder"
            type="checkbox" 
            id="randOrder"
            name="randOrder"
            value="randOrder"
            checked={this.state.isRandOrder}
            onChange={this.setRandOrder}
          />
          <label key="labRandOrder" htmlFor="randOrder">
            Random order
          </label>
        </div>
        <button className="startBtn" onClick={this.startTest}>
        <span>Start</span>
        </button>
      </div>
    );
  }
}