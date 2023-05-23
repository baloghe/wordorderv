import React from "react";
import TopicPane from './TopicPane.js';
import './Settings.css';

export default class Settings extends React.Component {
	constructor(props){
  	super(props);
    this.state = {
    	activeTitle:this.props.activeTitle == null ? 0 : this.props.activeTitle,
      isRandOrder: this.props.isRandOrder || false
    };
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