
import React, {useState} from 'react';

export default function ListQuizPane({returnTo, quiz}){
	
  const [langFrom, setLangFrom] = useState(quiz.langs['L1']);
  const [langTo, setLangTo] = useState(quiz.langs['L2']);
	
	const submit = (e) => {
	  e.preventDefault();
	  returnTo();
	};
	
	return(
  	<div>
      <h2>{quiz.title}</h2>
	<table border="1" cellPadding="10" cellSpacing="0">
        <thead>
		  <tr>
            <th key="1">{quiz.langs['L1']}</th>
            <th key="2">{quiz.langs['L2']}</th>
		  </tr>
        </thead>
        <tbody>
          {quiz.sentences.map((item,i) => (
            <tr key={i}>
              <td key={"L1-"+i}>{item['L1']}</td>
              <td key={"L2-"+i}>{item['L2']}</td>
            </tr>
          ))}
        </tbody>
      </table>
		<form onSubmit={submit}>
			<button onClick={submit}>OK</button>
		</form>
    </div>
  );
}
