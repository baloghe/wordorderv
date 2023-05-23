import React from "react";
import CardContainer from "./CardContainer.js";
import "./Question.css";

export default class Question extends React.Component{
  constructor(props){
  	super(props);
  }
  
  renderUserAnswerContainer = (inModifiable) => {
  	return (
    <tr>
        <td><span className="lang">{this.props.aLang}</span></td>
        <td><CardContainer 
              wordClasses={`word word-answer`}
              arr={this.props.aArr} 
              handleWordDrag={inModifiable ? this.props.handleWordDrag : null} 
              dragEnabled={inModifiable}
              actNum={this.props.actNum}
              />
         </td>
      </tr>
    );
  }
  
  renderExpectedAnswerContainer = () => {
  	return (
    <tr>
        <td></td>
        <td><CardContainer 
              wordClasses={`word word-expected`}
              arr={this.props.eArr} 
              handleWordDrag={null} 
              dragEnabled={false}
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
      {this.props.dragEnabled ? null : this.renderExpectedAnswerContainer()}
      </tbody></table>
    );
  }
}