import React, { Component } from 'react';

class Inputs extends Component {

	findDestination() {
		return alert('You pressed me');
	}

	render() {
		return (
			<div>
				<h3>Location</h3>
				<input />
				<h3>dates</h3>
				<input />
				<h3>Budget</h3>
				<input />
				<button onClick={ this.findDestination.bind(this) } >Submit</button>
			</div>
		);
	}
}

export default Inputs;