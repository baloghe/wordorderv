import React from "react";
import CardItem from "./CardItem.js";

export default class CardContainer extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	arr: props.arr.map(e=>e)
    };
    //console.log(`CardContainer :: constr arr: ${this.state.arr.length}`);
    
   };//constructor
   
   wordDragged = (from, to) => {
     //reorder array
     if(from != to){
      let newArr = this.state.arr.map(e=>e);
      let fromElement = newArr.splice(from,1)[0];
      let toPos = (from < to ? to-1 : to);
      newArr.splice(toPos,0,fromElement);
      //ask for rendering component
      this.setState({arr: newArr});
      //notify parent of new word order
      this.props.handleWordDrag(newArr);
     }
   };
   
   render() {
    /*console.log(`CardContainer.render() :: wordClasses=${this.props.wordClasses}, arr.length=${this.state.arr.length}, visibleEnabled=${this.state.visibleEnabled}`);*/
    
      return (
        <div>
          {this.state.arr.map((e,i) => {
            //console.log(`CardContainer.render(): i=${i}`);
            return (
        		<CardItem
                wordClasses={this.props.wordClasses}
                listitemkey={i} 
                word={e} key={'c'+i} 
                wordDragged={this.wordDragged} 
                dragEnabled={this.props.dragEnabled} 
                /*ref={this.state.dragListeners[i]}*/
                actNum={this.props.actNum}
             />);}
           )//map
         	}
        </div>
    );
   }
   
 }