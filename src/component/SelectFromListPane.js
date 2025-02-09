import React, {useState} from 'react';
import TitleColumn from './TitleColumn.js';


export default function SelectFromListPane({multiChoice, titles, selConfirmed, selCancelled}) {
	
	const [fromLst, setFromLst] = useState(titles);
	const [toLst, setToLst] = useState([]);
	
	const moveTitle = (toID, title) => {
		let origFrom = fromLst.map(e=>e);
		let origTo = toLst.map(e=>e);
		
		if(toID==="FROM"){
			origTo = origTo.filter( e => (e!== title) );
			origFrom = [title, ...origFrom];
		} else {
			origFrom = origFrom.filter( e => (e!== title) );
			origTo = [title, ...origTo];
		}
		
		//console.log(`origFrom: ${origFrom} , origTo: ${origTo}`);
		//console.log(`multiChoice=${multiChoice} , origTo.length = ${origTo.length}`);
		
		if(multiChoice && origTo.length > 1){
			//new item placed at index 0
			let excess = origTo[1];
			origFrom = [...origFrom, excess];
			origTo = [origTo[0]];
		}
		
		//apply consolidated changes
		setFromLst(origFrom);
		setToLst(origTo);
	};
	
  const ok = () => selConfirmed(toLst);
  const cancel = ()=> selCancelled();
	
  return (
    <div className='App'>
	<form onSubmit={ok}>
      <table>
		<tbody>
			<tr key="1">
				<td key="1"><TitleColumn columnTitle="Available" titles={fromLst} columnID="FROM" moveItem={moveTitle} /></td>
				<td key="2"><TitleColumn columnTitle="Chosen" titles={toLst} columnID="TO" moveItem={moveTitle} /></td>
			</tr>
			<tr key="2">
				<td key="1"><button onClick={cancel}>Cancel</button></td>
				<td key="2"><button onClick={ok}>OK</button></td>
			</tr>
		</tbody>
	  </table>
	</form>
    </div>
  );
}
