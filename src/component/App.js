import React from "react";
import axios from "axios";

import TestContainer from './TestContainer.js';
import Settings from './Settings.js';
import Spinner from './Spinner.js';
import shuffleArray from '../logic/shuffleArray.js';
import './App.css';

export default class App extends React.Component {
	constructor(props){
  	super(props);
    this.state = {
      topics: this.getTopics(props.tests),
	  tests: this.props.tests,
      actTopic: 0,
      actRandom: false,
      actPhase: "settings",
      results: [],
      qLang: props.qLang,
      aLang: props.aLang,
	  dbAvailable: props.dbAvailable
    };
  }
  
  getTopics = (inp) => {
  	return inp
	.map((e,i)=>{
    	return {title: e.title,
		        cnt: (e.sentences ? e.sentences.length : (e.cnt ? e.cnt : 0)),
				_id: (e._id ? e._id : i),
				langs: (e.langs ? e.langs : null)
				};
    })
	.sort((a, b) => a.title.localeCompare(b.title));
  }
  
  setLang = ([inQLang, inALang]) => {
  	this.setState({
      qLang: inQLang,
      aLang: inALang
    });
	//console.log(`App.setLang :: ${inQLang} , ${inALang}`);
  }
  
  fileLoaded = (inFileData) => {
  	let loadedTopics = inFileData.topics.map(e => {return {title: e.title, cnt: e.cnt};});
    
    this.state.qLang = inFileData.languages[0];
    this.state.aLang = inFileData.languages[1];
    
    let loadedTests = inFileData.topics.map(e => {
    	let ret = [];
      for(let ch of e.sentences){
        ret.push(ch);
      }
      return {sentences: ret};
    });
    
    this.setState({
      topics: loadedTopics,
      tests:  loadedTests
    });
  }
  
  showResults = (res) => {
    this.state.results.unshift(res);
    this.setState({
    	results: this.state.results.filter((e,i)=>i<5),
      actPhase: "results"
    });
    const st1 = setTimeout(() => {
      this.setState({
        actPhase: "settings"
      });
      clearTimeout(st1);
      }
      ,this.props.wait*2
    );
    
  }
  
  getRandomizedSentences = (idx) => {
  	
  	let arr = this.state.tests[idx].sentences.map(e=>e);
    return shuffleArray(arr);
    
    //return this.props.tests[idx].sentences;
  }
  
  startTest = (inTopic, inRandom) => {
	if(this.state.dbAvailable){
		//we have no tests, only their titles
		const request = {id: this.state.topics[inTopic]._id};
		//console.log(`App.startTest :: request=${JSON.stringify(request)}`);
		
		this.setState({actPhase: "loading"});
		
		axios
		.post(`/api/getquiz`, request)
		.then((data) => {
			this.setState({
			  tests: [data.data],	//we retrieve one test at a time
			  actTopic: 0, 			//and it will be the only element in the array
			  actRandom: inRandom,
			  actPhase: "test"
			});
		});
		
		
	} else {
		this.setState({
		  actTopic: inTopic,
		  actRandom: inRandom,
		  actPhase: "test"
		});
	}
  }
  
  renderSpinner = () => {
    return (<Spinner />);
  }
    
  renderSettings = () => {
    return (
      <Settings
        topics={this.state.topics}
        startTest={this.startTest}
        activeTitle={this.state.actTopic}
        isRandOrder={this.state.actRandom}
        fileLoaded={this.fileLoaded}
        qLang={this.state.qLang}
        aLang={this.state.aLang}
        setLang={this.setLang}
		dbAvailable={this.state.dbAvailable}
        />
    );
  }
    
  renderTestContainer = () => {
	//which language...?
	let actQL = null;
	let actAL = null;
	if(this.state.tests[this.state.actTopic].langs){
		if(this.state.tests[this.state.actTopic].langs.L1 == this.state.qLang){
			actQL = 'L1';
			actAL = 'L2';
		} else {
			actQL = 'L2';
			actAL = 'L1';
		}
	} else {
		actQL = this.state.qLang;
		actAL = this.state.aLang;
	}
	  
	//generate sentences
    let actSentences =(
      this.state.actRandom
      ? this.getRandomizedSentences(this.state.actTopic)
      : this.state.tests[this.state.actTopic].sentences
    ).map(e => {
		let actQ = 'L1';
    	return {
      	qSentence: e[actQL],
        aSentence: e[actAL]
      };
    });
    return (
      <TestContainer 
        qLang={this.state.qLang}
        aLang={this.state.aLang}
        tests={actSentences}
        wait={this.props.wait}
        dispatchResults={this.showResults}
        />
    );
  }
  
  renderResults = () => {
    	return (
      <div className="results-overall">
        <div className="results">
          <h3 className="results-head">
            Results
          </h3>
        </div>
        <table className="results">
          <thead>
            <tr>
              <th key="rc1">All</th>
              <th key="rc2">Good</th>
              <th key="rc3">Bad</th>
              <th key="rc4">Time (s)</th>
              <th key="rc5">%</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map((e,i)=>{
            	return (
            	<tr key={'rr'+i}>
              <td key={'rr'+i+'-1'}>{e.totTestNum}</td>
              <td key={'rr'+i+'-2'}>{e.cntGoodAns}</td>
              <td key={'rr'+i+'-3'}>{e.cntAnswered - e.cntGoodAns}</td>
              <td key={'rr'+i+'-4'}>{e.timeSpent}</td>
              <td key={'rr'+i+'-5'}>{Math.round(e.cntGoodAns * 100 / e.totTestNum)}</td>
              </tr>
              );
            })}
          </tbody>
        </table>
        </div>
      );
  }
  
  render() {
		if(this.state.actPhase == "loading") {
		  return this.renderSpinner();
		} else if(this.state.actPhase == "settings") {
		  return this.renderSettings();
		} else if(this.state.actPhase == "test") {
		  //console.log(`before render TestContainer: qLang=${this.state.qLang} , aLang=${this.state.aLang}`);
		  return this.renderTestContainer();
		} else if(this.state.actPhase == "results") {
		  return this.renderResults();
		}
	}
}