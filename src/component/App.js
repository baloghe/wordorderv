import React from "react";
import TestContainer from './TestContainer.js';
import Settings from './Settings.js';
import shuffleArray from '../logic/shuffleArray.js';
import './App.css';

export default class App extends React.Component {
	constructor(props){
  	super(props);
    this.state = {
    	topics: this.getTopics(props.tests),
      actTopic: 0,
      actRandom: false,
      actPhase: "settings",
      results: []
    };
  }
  
  getTopics = (inp) => {
  	return inp.map(e=>{
    	return {title: e.title, cnt: (e.sentences ? e.sentences.length : 0)};
    })
  }
  
  showResults = (res) => {
  	//console.log(`App: Test finished: ${JSON.stringify(res)}`);
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
  	
  	let arr = this.props.tests[idx].sentences.map(e=>{return {qSentence: e.qSentence, aSentence: e.aSentence};}
    );
    return shuffleArray(arr);
    
    //return this.props.tests[idx].sentences;
  }
  
  startTest = (inTopic, inRandom) => {
  	this.setState({
    	actTopic: inTopic,
      actRandom: inRandom,
      actPhase: "test"
    });
  }
    
  renderSettings = () => {
    return (
      <Settings
        topics={this.state.topics}
        startTest={this.startTest}
        activeTitle={this.state.actTopic}
        isRandOrder={this.state.actRandom}
        />
    );
  }
    
  renderTestContainer = () => {
    let actSentences =(
      this.state.actRandom
      ? this.getRandomizedSentences(this.state.actTopic)
      : this.props.tests[this.state.actTopic].sentences
    );
    return (
      <TestContainer 
        qLang={this.props.qLang}
        aLang={this.props.aLang}
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
		if(this.state.actPhase == "settings") {
      return this.renderSettings();
    } else if(this.state.actPhase == "test") {
      return this.renderTestContainer();
  	} else if(this.state.actPhase == "results") {
      return this.renderResults();
  	}
	}
}