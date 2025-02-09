import React, {useState} from 'react';

export default function ResultPane({returnTo, titles}){
	
	const submit = (e) => {
	  e.preventDefault();
	  returnTo();
	};
	
	return(
  	<div>
      <h2>Results</h2>
		<p>{titles.join(', ')}</p>
		<form onSubmit={submit}>
			<button onClick={submit}>Ok</button>
		</form>
    </div>
  );
}