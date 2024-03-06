import React from "react";
import axios from "axios";

import Test from './Test.js';
import TestButton from './TestButton.js';
import Spinner from './Spinner.js';

import tokenize from '../logic/tokenize.js';
import shuffleArray from '../logic/shuffleArray.js';

import './TestContainer.css';

import megaphone from '../img/megaphone.png';


export default class TestContainer extends React.Component {
	constructor(props) {
    super(props);
	//console.log(`TestContainer :: qLang=${props.qLang} , aLang=${props.aLang}`);
    this.state = {
      tests: this.extractTests(props.tests),
      totTestNum: props.tests.length,
      qLang: props.qLang,
      aLang: props.aLang,
      actTestNum: 0,
	  tcState: "loading",
	  audioSrc: null,
      tsContainerStart: new Date(),
      dragEnabled: true,
      aAnswers: [] //Array of {answer: |-sep String, tsSubmit: timestamp}
    };
	
	//preload mp3
	if(props.audio) {
		const request = {audio: props.audio};
		//this.setState({tcState: "loading"});
		axios
		.post(`/api/mp3`, request,  {responseType: 'blob' } ) //unless correct responseType set, string is returned
		.then( ( response ) => {
			let url      = URL.createObjectURL( new Blob( [response.data] ) );
			//console.log(`url: ${url}`);
			this.setState({audioSrc: url});
			this.setState({tcState: "ready"});
		 } )
		.catch(error => {
			console.log(`Error at loading audio file: ${props.tests.audio} :: ${error}`);
			//this.setState({tcState: "ready"});
			this.state.tcState = "ready";
		});
	} else {
		//console.log('no audio found for this test');
		//this.setState({tcState: "ready"});
		this.state.tcState = "ready";
	}
	
  } //constructor
  
  extractTests = (testArr) => {
  	//testArr: Array of {qSentence: String, aSentence: String}
    return testArr.map((e,i) => {
      let aSent = tokenize(e.aSentence);
    	let ret = {
      	qSentence: e.qSentence,
        aSentence: shuffleArray( aSent.map(x=>x) ),
        expResult: aSent,
        tsActStart: (i==0 ? new Date() : null),
		audio: (e.audio ? e.audio : null)
      };
      //console.log(`${i}: ${ret.qSentence} = ${ret.aSentence}`);
      return ret;
    });
  };
  
  showExpectedResult = (res) => {
  	this.setState({
      		dragEnabled: false,
			actResult: res
      	});
  }
  
  updateUserAnswer = (ansArr) => {
  	this.state.tests[this.state.actTestNum].aSentence = ansArr;
    //console.log(`updateUserAnswer: ${this.state.tests[this.state.actTestNum].aSentence.join('|')}`);
  }

  st1 = null;
  
  containerNextTest = (e) => {
  	//console.log(`TestContainer.nextTest entered...`);
    
	let strAns = this.state.tests[this.state.actTestNum].aSentence.join('|');
      let expAns = this.state.tests[this.state.actTestNum].expResult.join('|');
      let tstResult = (strAns.trim() == expAns.trim());
	  
    this.showExpectedResult(tstResult);

    //shifted here from setTimeout(.) in order to take account of wrong answers before Retry pressed
    let tstSecSpent = (new Date() - this.state.tests[this.state.actTestNum].tsActStart)/1000;
    let ans = {
      secSpent: tstSecSpent,
      result: tstResult
      };
    //add answer
    this.state.aAnswers = [...this.state.aAnswers, ans];        
	
    this.st1 = setTimeout(() => {
    	/* shifted before setTimeout(.)
      let tstSecSpent = (new Date() - this.state.tests[this.state.actTestNum].tsActStart)/1000;
      
      let ans = {
              secSpent: tstSecSpent,
              result: tstResult
              };
        this.state.aAnswers = [...this.state.aAnswers, ans]
        
        //console.log(`containerNextTest :: ans=${JSON.stringify(this.state.aAnswers)}`);
    	*/
	//show next test
	this.state.tests[this.state.actTestNum].tsActStart = new Date();
	    
      if(this.state.actTestNum < this.state.totTestNum-1){
        //save completion time and answer
        this.setState({
            actTestNum: this.state.actTestNum+1,
            tsActStart: new Date(),
            dragEnabled: true
          });
        //console.log(`TestContainer.nextTest: setState() called`);
        } else {
          //console.log(`nextTest: No more tests => exit`);
          this.exitTest();
        }
        
      clearTimeout(this.st1);
    }, tstResult ? this.props.wait : this.props.wait * 2);
  };
  
  retryTest = () => {
	  shuffleArray(this.state.tests[this.state.actTestNum].aSentence);
	  this.setState({
            tsActStart: new Date(),
            dragEnabled: true
          });
	  clearTimeout(this.st1);
  };
  
  exitTest = (e) => {
  	//compile results
    let res = {
    	totTestNum: this.state.totTestNum,
      cntAnswered: this.state.aAnswers.length,
      timeSpent: (new Date() - this.state.tsContainerStart)/1000,
      cntGoodAns: this.state.aAnswers.reduce(
                     (c,e)=>(c+(e.result ? 1 : 0))
      							,0
      						)
    };
  	//exit => navigate to Results
    //console.log(`Test exited, res: ${JSON.stringify(res)}`);
    this.props.dispatchResults(res);
  };
  
  hasAudio = () => {
	if(   this.state.audioSrc != null
	   && this.state.tests[this.state.actTestNum].audio){
		return true;
	} else return false;
  };
  
  playSound = () => {
	  //Play section needed
		if(this.state.audioSrc != null){
			let idx = this.state.actTestNum;
			//console.log(`play section ${this.state.tests[idx].audio.start} - ${this.state.tests[idx].audio.end}`);
			const atg = document.getElementById('audio'); //new Audio(this.state.audioSrc);
			atg.src = this.state.audioSrc;
			atg.currentTime = this.state.tests[idx].audio.start / 1000.0; //position needed as seconds
			atg.muted = false;
			atg.load();
			atg.play();
			let playlen = this.state.tests[idx].audio.end - this.state.tests[idx].audio.start; //length needed as millisec
			const i = setInterval(()=>atg.pause(), playlen);
		} else {
			console.log('audio not ready!');
		}

  };
  
  renderButtons(){
  	return (
    <table><tbody>
      <tr key="exit-next">
      <td className="exitTest"><TestButton callBack={this.exitTest} caption="Exit" /></td>
      <td className="nextTest"><TestButton callBack={this.containerNextTest} caption="Next" /></td>
      </tr>
	  {this.hasAudio() ? <tr key="listen" colSpan="2">
						<button key="aux" className="audio" onClick={this.playSound} onTouchStart={this.playSound} >
							<img src={megaphone} alt="Play" />
						</button>
					</tr>
					: <p />
	  }
      </tbody></table>
    );
  }
  
  renderActResults(){
  	let clnm = this.state.actResult ? "actres-ok" : "actres-bad";
  	let cont = this.state.actResult ? '\u2705' : '\u274C';
    //console.log(`clnm=${clnm}`);
  	return (
    <div><span className={clnm}> {cont} </span></div>
    );
  }
  
  render() {
	  
	if(this.state.tcState=='loading'){
		return (<div>
					<p>Loading audio...</p>
					<Spinner />
				</div>
				);
	}
    
    let tid = (this.state.dragEnabled ? 't' : 'tr') + this.state.actTestNum;
    //console.log(`TestContainer.render() :: actTestNum: ${this.state.actTestNum}, aArr.length=${this.state.tests[this.state.actTestNum].aSentence.length}, tid=${tid}`);
    
  	return (
    	<div>
    	<Test 
        key={tid}
        actNum={this.state.actTestNum+1}
        totNum={this.state.totTestNum}
        qLang={this.state.qLang}
        qSentence={this.state.tests[this.state.actTestNum].qSentence}
        aLang={this.state.aLang}
        aArr = {this.state.tests[this.state.actTestNum].aSentence}
        expResult = {this.state.tests[this.state.actTestNum].expResult}
        exitTest={this.exitTest} 
        containerNextTest={this.containerNextTest}
        wait={this.props.wait}
        dragEnabled={this.state.dragEnabled}
        updateContainer={this.updateUserAnswer}
        retryTest={this.retryTest} 
/>
    {this.state.dragEnabled ? this.renderButtons() : null}
    {this.state.dragEnabled ? null : this.renderActResults()}
</div>);
  }//render
}
