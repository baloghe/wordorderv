import React from "react";
import "./Spinner.css";

/* Credits to Kirtesh Bansal
source: https://dev.to/kirteshbansal/spinner-loader-in-react-using-css-458h
*/

export default class Spinner extends React.Component{
	
	render(){
		return (
			<div className="loader"></div>
		);
	}
}

