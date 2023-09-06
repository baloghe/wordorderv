import React from "react";
import QuestionNumber from "./QuestionNumber.js";
import Question from "./Question.js";
import "./Test.css";

export default class Test extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	words: props.aArr.map(e=>e)
    };
    //console.log(`Test.constructor called`);
   }
   
   onWordDragged = (newArr) => {
   		//console.log(`Test.onWordDragged() :: ${newArr.join('|')}`);
      this.props.updateContainer(newArr.map(e=>e));
   	  this.setState({words: newArr.map(e=>e)});
   }
   
   exitTest = (e) => {
   	this.props.exitTest(e);
   }
   
	render() {
  	//console.log(`Test.render() called, actNum=${this.props.actNum}, words: ${this.state.words.length}, drag: ${this.props.dragEnabled}, aArr=${this.props.aArr.join('|')}, words=${this.state.words.join('|')}`);
  	return (<div className="test">
    <QuestionNumber actNum={this.props.actNum} totNum={this.props.totNum} />
    <Question
      actNum={this.props.actNum}
      qLang={this.props.qLang} 
      qSentence={this.props.qSentence} 
      aLang={this.props.aLang}
      aArr={this.state.words}
      eArr={this.props.expResult}
      dragEnabled={this.props.dragEnabled}
      handleWordDrag={this.onWordDragged}
      retryTest={this.props.retryTest}
      />
  </div>);
  }
}
