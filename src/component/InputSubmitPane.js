import React, {useState} from 'react';

export default function InputSubmitPane({state, title, langFrom, langTo, listLen, loadQuiz}){
	
	const submit = (e) => {
	  e.preventDefault();
	  loadQuiz();
	};
	
	if(state) {
		return (<form key="isp4" onSubmit={submit}>
		         <h3 key="isp1">Title: {title}</h3>
				 <p key="isp2"><i>{langFrom} &rarr; {langTo}</i> :: {listLen} pairs</p>
				<button onClick={submit}>Submit</button>
			   </form>);
	} else {
		return (<p></p>);
	}
}
