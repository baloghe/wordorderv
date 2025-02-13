import React, { useState, useEffect } from "react";
import axios from "axios";
import sha256 from 'sha256';

import Spinner from './Spinner.js';

import './admin.css';

export default function LoginPane({loginSuccess}){
	const [state, setState] = useState('ENTER');
	const [user, setUser] = useState('');
	const [pw, setPW] = useState('');

	const login = (e) => {
		e.preventDefault();
		
		const request = {encUser: sha256(user), encPw: sha256(pw)};
		
		setState('AUTHING');
		
		axios
		.post("api/auth", request)
		.then((data) => {
			//console.log('Received ::');
			//console.log(data);
			if(data.data){
				setState('OK');
				loginSuccess();
			} else {
				setState('ERROR');
			}
		});
	};

	if(state==='ENTER' || state==='ERROR'){
		return (
			<div>
				<h2>Log in</h2>
				<form onSubmit={login}>
					<label htmlFor="user">User: </label>
					<input type="text" name="user" onChange={e => setUser(e.currentTarget.value)} required />
					<label htmlFor="pw">Password: </label>
					<input name="pw" type="password" onChange={e => setPW(e.currentTarget.value)} required />
					<button onClick={login}>Submit</button>
				</form>
				{state==='ERROR'
					? <p className="error">Wrong user or password!</p>
					: <p></p>
				}
			</div>
		);
	} else if(state==='AUTHING') {
		return (
			<div>
				<p>Authenticating...</p>
				<Spinner />
			</div>
		);
	} else if(state==='OK') {
		return (
			<div>
				<p>Login successful!</p>
			</div>
		);
	}
	/*	
  	<div>
    <h2>Log in</h2>
	<form onSubmit={login}>
		<label htmlFor="user">User: </label>
		<input type="text" name="user" onChange={e => setUser(e.currentTarget.value)} required />
		<label htmlFor="pw">Password: </label>
		<input name="pw" type="password" onChange={e => setPW(e.currentTarget.value)} required />
		<button onClick={login}>Submit</button>
	</form>
	{state==='ENTER'
		? <p></p>
		: state==='ERROR'
			? <p>Wrong user or password!</p>
			: <p>Login successful</p>
	}
    </div>
  );*/
}