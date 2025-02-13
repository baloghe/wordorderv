import React, {useState} from 'react';

import './admin.css';


export default function ActionChoicePane({returnTo}){
	
	const delAction = () => {returnTo('CHOOSETODEL')};
	const addAction = () => {returnTo('INPUT')};
	const listAction = () => {returnTo('CHOOSETOLIST')};
	
	return(
  	<div>
		<h2>Admin functions</h2>
		<div>
			<form onSubmit={delAction}>
				<button className="actionchoice" onClick={delAction}>Delete quizzes</button>
			</form>
			<form onSubmit={addAction}>
				<button className="actionchoice" onClick={addAction}>Add new quiz</button>
			</form>
			<form onSubmit={listAction}>
				<button className="actionchoice" onClick={listAction}>List a quiz</button>
			</form>
		</div>
    </div>
  );
}
