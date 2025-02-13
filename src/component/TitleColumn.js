import React, {useState} from 'react';
import TitleCard from './TitleCard.js';

import './admin.css';

export default function TitleColumn({columnTitle, titles, columnID, moveItem}){

  const [dragging, setDragging] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    let title = e.dataTransfer.getData("text/plain");
    if(titles.includes(title)){
		//dropped on self => do nothing
		//console.log(`drop to SELF: ${title}`);
	} else {
		//dropped here from another container
		//console.log(`drop ${title} HERE: ${columnID}`);
		moveItem(columnID, title);
	}
	setDragging(null);
  };
  
  const handleDragOver = (e) => {
	  e.preventDefault();
	  let data = e.dataTransfer.getData("text");
  };
  
  const titleDragged = (title) => {
	  setDragging(title);
	  //console.log(`App.titleDragged: ${title}`);
  };
  
  return (
    <div className='droparea'
	  droppable="true"
      onDrop={handleDrop}
	  onDragOver={handleDragOver}
	>
      <h3>{columnTitle}</h3>
      <div className="scrollable">
        {titles.map((e,i) => (
				<TitleCard key={i} title={e} titleDragged={titleDragged} /> 
			) )
		}
      </div>
    </div>
  );
}