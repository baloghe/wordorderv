import React from "react";
import "./CardItem.css";

/**
  Clickable version (fits better handheld devices)
*/
export default class CardItem2 extends React.Component {
	constructor(props){
  	super(props);
  }
  
  cardClicked = e => {
  	if(!this.props.clickEnabled)
    	return;
  	let clk = this.props.listitemkey;
    this.props.cardClicked(clk);
  }
  
	render() {
  	return (
      <div className={this.props.wordClasses}
          key={this.props.listitemkey}
          data-itemkey={this.props.listitemkey}
          onClick={this.cardClicked}
        >
        {this.props.word.length > 1 ? this.props.word : ` ${this.props.word} `}
      </div>
      );
  };
  
}
