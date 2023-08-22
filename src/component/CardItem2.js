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
	let actClasses = this.props.wordClasses;
	if(this.props.word.length==1){
		actClasses = actClasses + " card-padded";
	}
  	return (
      <div className={actClasses}
          key={this.props.listitemkey}
          data-itemkey={this.props.listitemkey}
          onClick={this.cardClicked}
        >
	{this.props.word}
      </div>
      );
  };
  
}
