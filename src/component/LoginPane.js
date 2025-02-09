import React, { useState, useEffect } from "react";
import axios from "axios";
import sha256 from 'sha256';

export default function LoginPane({loginSuccess}){
	const [state, setState] = useState('ENTER');
	const [user, setUser] = useState('');
	const [pw, setPW] = useState('');

	const login = (e) => {
		e.preventDefault();
		
		const request = {encUser: sha256(user), encPw: sha256(pw)};
		
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
	{state==='ENTER'
		? <p></p>
		: state==='ERROR'
			? <p>Wrong user or password!</p>
			: <p>Login successful</p>
	}
    </div>
  );
}