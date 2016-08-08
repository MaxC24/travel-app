import React, { Component } from 'react';
import Calendar from 'react-input-calendar';
import './inputs.style.css';


class Inputs extends Component {

	constructor(props){
		super(props);
		this.state = {
			location: '',
			dates: [new Date(), new Date()],
			budget: ''
		};
	}

	getLocation(e) {
		this.setState({location: e.target.value});
	}

	getDatesFrom(date) {
		this.setState({dates: this.state.dates.map( (day, index) => {
			return date;
		})});
	}

	getDatesTo(date) {
		this.setState({dates: this.state.dates.map( (day, index) => {
			if(index === 1) return date
			else return day;
		})});
	}

	getBudget(e) {
		this.setState({budget: e.target.value});
	}

	findDestination() {
		this.props.find(this.state.location + " " + this.state.dates + ' ' + this.state.budget);
	}

	render() {
		return (
			<div>
				<h3>Location</h3>
				<input className='input' onChange={this.getLocation.bind(this)} value={this.state.location}/>
				<h3>From</h3>
				<Calendar className='input' format='DD/MM/YYYY' date={ this.state.dates[0] } onChange={ this.getDatesFrom.bind(this) } />
				<h3>To</h3>
				<Calendar className='input' format='DD/MM/YYYY' date={ this.state.dates[1] } onChange={ this.getDatesTo.bind(this) } />
				<h3>Budget</h3>
				<input  className='input' onChange={this.getBudget.bind(this)} value={this.state.budget} />
				<button className='but' onClick={ this.findDestination.bind(this) } >Find Destination</button>
			</div>
		);
	}
}

export default Inputs;