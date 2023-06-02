import React, { useState } from "react";
import CardItem2 from "./CardItem2.js";

/**
  Clickable version (better fit for handheld devices)
*/
export default function CardContainer2({arr, handleWordDrag, wordClasses, modifyEnabled, actNum}) {

	const [wordarr, setWordarr] = useState(arr);
  const [selectedWord, setSelectedWord] = useState();
  
  const wordClicked = idx => {
  	//nothing is selected yet => "first" click happened
    if(selectedWord==null){
    	setSelectedWord(idx);
    } else if(selectedWord===idx) {
    //second click on the same word meas deselection
    	setSelectedWord(null);
    } else {
    //second click on a different word means to swap them
      swapWords(selectedWord,idx);
      //after swapping them nothing should be selected
      setSelectedWord(null);
    }
  }
  
  const swapWords = (from, to) => {
  	if(from != to){
    	let newArr = wordarr.map(e=>e);
      [ newArr[from] , newArr[to] ] = [ newArr[to] , newArr[from] ];
      //refresh state
      setWordarr(newArr);
      //notify parent of new word order
      handleWordDrag(newArr);
    }
  }
    
      return (
        <div>
          {arr.map((e,i) => {
            //console.log(`CardContainer.render(): i=${i}`);
            //if this particular word is selected, we should highlight it
            let actWordClasses = wordClasses;
            if(i===selectedWord){
            	actWordClasses = actWordClasses + ' ' + 'word-answer-selected';
            }
            return (
        		<CardItem2
                wordClasses={actWordClasses}
                listitemkey={i} 
                word={e} key={'c'+i} 
                cardClicked={wordClicked} 
                clickEnabled={modifyEnabled} 
                //ref={this.state.dragListeners[i]}
                actNum={actNum}
             />);}
           )//map
         	}
        </div>
    );
   
 }
