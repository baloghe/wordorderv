import React, {useState, useEffect} from 'react';
import axios from "axios";

import LoginPane from './LoginPane.js';
import InputPane from './InputPane.js';
import ResultPane from './ResultPane.js';
import ListQuizPane from './ListQuizPane.js';
import ActionChoicePane from './ActionChoicePane.js';
import TitleChoicePane from './TitleChoicePane.js';
import Spinner from './Spinner.js';


export default function AdminPane({aState}){
  const [actState, setActState] = useState(aState);
  const [loggedIn, setLoggedIn] = useState(false);
  const [titles, setTitles] = useState([]);
  const [quiz, setQuiz] = useState(null);
  
  const loginDone = () => {
  	setLoggedIn (true);
	console.log('Login successful');
    resetState();
  };
	
	useEffect(() => {
		console.log(titles);
		setActState('CHOOSEACTION');
	}, [titles]);
  /*
  const getTitles = (inp) => {
  	return inp
	.map((e,i)=>{
    	return {title: e.title,
		        cnt: (e.sentences ? e.sentences.length : (e.cnt ? e.cnt : 0)),
				_id: (e._id ? e._id : i),
				langs: (e.langs ? e.langs : null),
				hasAudio: e.hasAudio
				};
    })
	.sort((a, b) => a.title.localeCompare(b.title));
  };
  */
  const getQuizByTitle = (inTitle) => {
	  console.log(`getQuizByTitle :: titles.length=${titles.length}`);
	  /*
	  for(let e of titles){
		  console.log(e.title);
	  }*/
	  let found = titles.filter(t=>(t.title.trim()===inTitle[0].trim()));
	  //console.log(`inTitle: ${typeof inTitle} , titles[0].title: ${typeof titles[0].title}`);
	  //let found=[titles[0]];
	  if(found.length > 0){
		//console.log(`getQuizByTitle :: found ${found.length} items`);
		return found[0];
	  } else {
		//console.log(`getQuizByTitle :: nothing found for title ${inTitle}`);
		return null;
	  }
  };
  
  const resetState = () => {
	console.log('AdminPane.resetState() called');
	
	setActState ('REFRESHING');
	
	let newState;
    //Async read from DB
	axios
	.post(`/api/qtitles`, null)
	.then((data) => {
		console.log(`titles returned`);
		setTitles(data.data.titles.sort((a, b) => a.title.localeCompare(b.title)));
	})
	.catch(error => {
		setActState('DBERROR');
		console.log(`DBERROR`);
	});
	
    //result: list of existing titles
    //setTitles(['mock 1' , 'mock 2']);
  };
  
  const chooseAction = (s) => {
	  //console.log(`chooseAction :: change state from ${actState} -> ${s}`);
	  setActState(s);
  };
  
  const cancel = () => {
	  setActState('CHOOSEACTION');
  };
  
  const listQuiz = (title) => {
	  
	  if(title===null){
		  console.log(`Listing cancelled`);
		  setActState('CHOOSEACTION');
	  } else {
		  console.log(`Quiz to be listed: ${title}`);
		  
		  //Async read from DB
		let quiz = getQuizByTitle(title);
		console.log(quiz);
		if(quiz===null){
			console.log(`No such title: ${title} => return opening pane`);
			setActState('CHOOSEACTION');
		} else {
			//console.log(`Retrieving: ${title} => id=${quiz._id}`);
			setActState('RETRIEVING');
			const request = {id: quiz._id};
			
			axios
			.post("api/getquiz", request)
			.then((data) => {
				setQuiz(data.data);
				console.log(quiz);
				setActState('LISTQUIZ');
			})
			.catch(error => {
				setActState('DBERROR');
				console.log(`DBERROR: ${error}`);
			});
			
		}
	  }
  };
  
  const deleteQuiz = (dtitles) => {
	  if(dtitles===null){
		  console.log(`Deletion cancelled`);
		  setActState ('CHOOSEACTION');
	  } else {
		  console.log(`Quizzes to be deleted: ${dtitles}`);
		  const request = dtitles;
		
		axios
		.post("api/deloneq", request)
		.then((data) => {
			//setQuiz(data.data);
			console.log(data.data);
			resetState();
		})
		.catch(error => {
			setActState('DBERROR');
			console.log(`DBERROR: ${error}`);
		});
	  }
  };
  
  const submitQuiz = (title, l1, l2, lst) => {
	  console.log(`Quiz to be added: ${title} :: ${l1} -> ${l2} , ${lst.length} pairs`);
	  
	  setActState('UPLOADING');
		//const request = {[{title:title,langs:{L1:l1,L2:l2},sentences:lst}]}
		const request = {title: title, langs: {L1:l1, L2:l2}, sentences: lst.map(e => ({L1: e[0], L2: e[1]}))};
	  console.log(request);
		
		axios
		.post("api/loadoneq", request)
		.then((data) => {
			//setQuiz(data.data);
			console.log(data.data);
			resetState();
		})
		.catch(error => {
			setActState('DBERROR');
			console.log(`DBERROR: ${error}`);
		});
  };
  
  if(!loggedIn){
  	//return Login screen
    return <LoginPane loginSuccess={loginDone} />;
  } else {
	if(actState==='INPUT'){
		return (<InputPane submitQuiz={submitQuiz} cancelAction={cancel}/>);
	} else if(actState==='RESULT'){
		return (<ResultPane returnTo={resetState} titles={titles.map(e=>(e.title + ' (' + e.cnt + ')'))}/>);
	} else if(actState==='LISTQUIZ'){
		return (<ListQuizPane returnTo={resetState} quiz={quiz}/>);
	} else if(actState==='CHOOSEACTION'){
		return (<ActionChoicePane returnTo={chooseAction}/>);
	} else if(actState==='CHOOSETODEL'){
		return (<TitleChoicePane multiChoice={true} titles={titles.map(e=>e.title)} action={deleteQuiz} />);
	} else if(actState==='CHOOSETOLIST'){
		return (<TitleChoicePane multiChoice={false} titles={titles.map(e=>e.title)} action={listQuiz} />);
	} else if(actState==='REFRESHING'){
		return (<div>
					<p>Refreshing...</p>
					<Spinner />
				</div>
				);
	} else if(actState==='UPLOADING'){
		return (<div>
					<p>Uploading quiz...</p>
					<Spinner />
				</div>
				);
	} else if(actState==='DELETING'){
		return (<div>
					<p>Deleting quiz...</p>
					<Spinner />
				</div>
				);
	} else if(actState==='RETRIEVING'){
		return (<div>
					<p>Retrieving quiz data...</p>
					<Spinner />
				</div>
				);
	} else if(actState==='DBERROR'){
		return (<div>
					<p>DB unavailable, nothing to admin...</p>
				</div>
				);
	}
  }
}
