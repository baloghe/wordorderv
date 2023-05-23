import React from "react";
import "./QuestionNumber.css";

export default class QuestionNumber extends React.Component {
	constructor(props){
		super(props);
	}
	
	render() {
		  return (
			<div className="questionnumber">
			  <span className="actNum">{this.props.actNum}</span> / <span className="totNum">{this.props.totNum}</span>
			</div>
		  );
	}
}