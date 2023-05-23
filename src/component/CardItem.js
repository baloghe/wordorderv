import React from "react";
import "./CardItem.css";

export default class CardItem extends React.Component {
	constructor(props){
		super(props);
	  }
  
	handleDragStart = e => {
    //console.log(`handleDragStart :: ${this.props.listitemkey}`);
    e.dataTransfer.setData("text/plain", this.props.listitemkey.toString());
  }
  
  handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    let from = e.dataTransfer.getData("text/plain");
    let to = e.target.dataset.itemkey;
   	//console.log(`CardItem: drag from ${from} to ${to}`);
    this.props.wordDragged(from, to);
  }
  
  handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  enableDrag = e => {
  	this.setState({
    	dragEnabled: e
    });
  }
  
	render() {
  	return (
      <div className={this.props.wordClasses}
          key={this.props.listitemkey}
          data-itemkey={this.props.listitemkey}
          draggable={this.props.dragEnabled ? "true" : "false" }
          onDrop={this.props.dragEnabled ? this.handleDrop : null}
          onDragStart={this.props.dragEnabled ? this.handleDragStart : null}
        onDragOver={this.handleDragOver}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
        >
        {this.props.word}
      </div>
      );
  };
}