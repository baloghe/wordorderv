import React, {useState} from 'react';

import './admin.css';

export default function TitleCard({title, titleDragged, columnID}){
  const [dragEnabled, setDragEnabled] = useState(true);

  const doNothing = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", title);
	titleDragged(title);
	//console.log(`drag start: ${title}`);
  };

  return (
    <div className='dragitem'
      key={title}
      draggable="true"
      onDragStart={handleDragStart}
    >
      <p>{title}</p>
    </div>
  );
}
