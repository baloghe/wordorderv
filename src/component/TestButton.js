import React from "react";

export default class TestButton extends React.Component {
  constructor(props){
  	super(props);
  }
  
  handleClick = (e) => {
    this.props.callBack(e);
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.caption}
      </button>
    );
  }
}
