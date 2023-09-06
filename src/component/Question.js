import React from "react";
import CardContainer2 from "./CardContainer2.js";
import TestButton from "./TestButton.js";
import "./Question.css";

/**
  switched to 'clickable' version (as opposed to 'draggable') by rendering CardContainer2
  switch back: revert to CardContainer and comment out dragEnabled
*/
export default class Question extends React.Component{
  constructor(props){
  	super(props);
  }
  
  renderUserAnswerContainer = (inModifiable) => {
  	return (
    <tr>
        <td><span className="lang">{this.props.aLang}</span></td>
        <td><CardContainer2 
              wordClasses={`word word-answer`}
              arr={this.props.aArr} 
              handleWordDrag={inModifiable ? this.props.handleWordDrag : null} 
              /*dragEnabled={inModifiable}*/
              modifyEnabled={inModifiable}
              actNum={this.props.actNum}
              />
         </td>
      </tr>
    );
  }
  
  renderRetryButton = () => {
  	return (
	  <tr>
		<td></td>
		<td><TestButton callBack={this.props.retryTest} caption="Retry" /></td>
	  </tr>
    );
  }
  
  renderExpectedAnswerContainer = () => {
  	return (
    <tr>
        <td></td>
        <td><CardContainer2 
              wordClasses={`word word-expected`}
              arr={this.props.eArr} 
              handleWordDrag={null} 
              /*dragEnabled={false}*/
              modifyEnabled={false}
              actNum={this.props.actNum}
              />
         </td>
      </tr>
    );
  }
  
  render() {
    //console.log(`Question.render() called, aArr=${this.props.aArr.length}`);
    
  	return (
    <table><tbody><tr>
        <td><span className="lang">{this.props.qLang}</span></td>
        <td><span className="question">{this.props.qSentence}</span></td>
      </tr>
      {this.renderUserAnswerContainer(this.props.dragEnabled)}
      {this.props.dragEnabled ? null : this.renderRetryButton()}
      {this.props.dragEnabled ? null : this.renderExpectedAnswerContainer()}
      </tbody></table>
    );
  }
}
