import React, {useState} from 'react';
import SelectFromListPane from './SelectFromListPane.js';


export default function TitleChoicePane({multiChoice, titles, action}){
	
	const selConfirmed = (lst) => {
		action(lst);
	};
	
	const selCancelled = () => {
		action(null);
	};
	
	return (
		<SelectFromListPane multiChoice={multiChoice} titles={titles} selConfirmed={selConfirmed} selCancelled={selCancelled} />
	);	
	
}
