import React, {useState} from 'react';


export default function ActionChoicePane({returnTo}){
	
	const delAction = () => {returnTo('CHOOSETODEL')};
	const addAction = () => {returnTo('INPUT')};
	const listAction = () => {returnTo('CHOOSETOLIST')};
	
	return(
  	<div>
		<form onSubmit={delAction}>
			<button onClick={delAction}>Delete quizzes</button>
		</form>
		<form onSubmit={addAction}>
			<button onClick={addAction}>Add new quiz</button>
		</form>
		<form onSubmit={listAction}>
			<button onClick={listAction}>List a quiz</button>
		</form>
    </div>
  );
}
