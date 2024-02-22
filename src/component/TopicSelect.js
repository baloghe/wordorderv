import React from "react";
import "./TopicSelect.css";

export default class TopicSelect extends React.Component{
	
	constructor(props) {
		super(props); //{topics :: Array{title}, activeTitle :: int, selectedTitleChanged()}
		
		this.state = {
			activeTitle: this.props.activeTitle
		};
		
	}
	
	titleChanged = (e) => {
		this.setState({
			activeTitle: e.target.value
		});
		this.props.selectedTitleChanged(e.target.value);
	};
	
	render(){
		return (
			<div className="radios">
				<select onChange={this.titleChanged} defaultValue={this.state.activeTitle}>
					{this.props.topics.map((e,i)=>(
						<option key={i}
							className="topic-title"
							value={i}
						>{e.title}</option>
					))}
				</select>
			</div>
		);
	}
}

