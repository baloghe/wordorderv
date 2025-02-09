import React, {useState} from 'react';
import InputErrorPane from './InputErrorPane.js';
import InputSubmitPane from './InputSubmitPane.js';

const txt2stc = (t) => t.split('\n').map(e => e.split('\t'));

export default function InputPane({submitQuiz}){
  const [state, setState] = useState(false);
  const [errors, setErrors] = useState('');
  const [title, setTitle] = useState('');
  const [langFrom, setLangFrom] = useState('TR');
  const [langTo, setLangTo] = useState('EN');
  const [qtext, setQtext] = useState('');
  const [list, setList] = useState([]);

  const submit = (e) => {
	  e.preventDefault();
    setList(txt2stc(qtext));
	  
  	if(check()){
  		setState(true);
  	} else {
		setState(false);
		console.log(errors);
	}
  };

  const check = () => {
    let ret = true;
    let errtxt=[];

    //title
    if(title.trim().length===0){
      ret = false;
      errtxt = [...errtxt , "missing TITLE"];
    }
    //languages
    if(langFrom.trim().length===0){
      ret = false;
      errtxt = [...errtxt , "missing L1"];
    }
    if(langTo.trim().length===0){
      ret = false;
      errtxt = [...errtxt , "missing L2"];
    }
    //content
    if(list.length===0){
      ret = false;
      errtxt = [...errtxt , "missing sentences"];
    } else {
      let err_sents = [];
	  let i = 0;
	  for(let e of list){
		  i++;
		  if( e.length !== 2){
			  err_sents = [...err_sents , i];
		  }
	  }//next e
	  if(err_sents.length > 0){
		  errtxt = [...errtxt , "wrong sentences: " + err_sents.join(", ")];
	  }
    }
	
	//finally
	setErrors(errtxt.join("; "));
	return (errtxt.length === 0);
  };
  
  const loadQuiz = () => {
	  submitQuiz(title, langFrom, langTo, list);
  };

	return (
  	<div>
      <h2>Input Quiz Data</h2>
      <form onSubmit={submit}>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" onChange={e => setTitle(e.currentTarget.value)} required />
          <label htmlFor="lfrom">L1: </label>
          <input name="lfrom" value="TR" onChange={e => setLangFrom(e.currentTarget.value)} required />
          <label htmlFor="lto">L2: </label>
          <input name="lto" value="EN" onChange={e => setLangTo(e.currentTarget.value)} required />
		  <br/>
          <label htmlFor="txt">Sentences: </label>
          <textarea name="txt" onChange={e => setQtext(e.currentTarget.value)} required />
        <button onClick={submit}>Check it!</button>
      </form>
	  {!state && <InputErrorPane state={state} errors={errors} />}
	  {state && <InputSubmitPane state={state} title={title} langFrom={langFrom} langTo={langTo} listLen={list.length} loadQuiz={loadQuiz} />}
    </div>
  );
}
