import React, {useState} from 'react';

import './admin.css';


export default function InputErrorPane({state, errors}){
	
	if((!state) && errors.length === 0){
		return (
			<div key="iep0">
				<p key="iep2">Type something!</p>
			</div>
			);
	}
	else if((!state) && errors.length > 0){
		return (
			<div key="iep0">
				<h3 key="iep1">Error!</h3>
				<p key="iep2" className="error">{errors}</p>
			</div>
			);
	} else return (
			<p>No errors</p>
			);
}
