import React, { Component } from 'react';

class Inputs extends Component {

	constructor(props){
		super(props);
		this.state = {
			location: '',
			dates: '',
			budget: ''
		};
	}

	getLocation(e) {
		this.setState({location: e.target.value});
	}

	getDates(e) {
		this.setState({dates: e.target.value});
	}

	getBudget(e) {
		this.setState({budget: e.target.value});
	}

	findDestination() {
		this.props.find(this.state.location);
	}

	render() {
		return (
			<div>
				<h3>Location</h3>
				<input onChange={this.getLocation.bind(this)} value={this.state.location}/>
				<h3>Dates</h3>
				<input onChange={this.getDates.bind(this)} value={this.state.dates}/>
				<h3>Budget</h3>
				<input onChange={this.getBudget.bind(this)} value={this.state.budget} />
				<button onClick={ this.findDestination.bind(this) } >Find Destination</button>
			</div>
		);
	}
}

export default Inputs;