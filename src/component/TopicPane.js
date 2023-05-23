import React from "react";
import './TopicPane.css';

export default class TopicPane extends React.Component {
	constructor(props){
  	super(props);
    this.state = {
    	activeTitle: this.props.activeTitle
    };
    //console.log(`${props.topics.map(e=>(e.cnt + ' ' + e.title)).join(', ')}`);
  }
  
  titleChanged = (e) => {
  	this.setState({
    	activeTitle: e.target.value
    });
    this.props.selectedTitleChanged(e.target.value);
  };
  
  render(){
  	return (
    	<div className="radios">
      {this.props.topics.map((e,i)=>(
      	<div key={'d'+i}>
          <input 
            key={'i'+i} 
            type="radio" 
            value={i.toString()} 
            name="titles" 
            id={'tit'+i}
            checked={i==this.state.activeTitle}
            onChange={this.titleChanged}
          />
          <label key={'lab'+i} htmlFor={'tit'+i}>
            <span key={'lab'+i+'-1'} className="topic-title">{e.title}</span> 
            <span key={'lab'+i+'-2'} className="topic-title topic-cnt">({e.cnt})</span>
          </label></div>))}
      </div>
    );
  }
}