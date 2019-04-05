import React, {Component} from 'react';
import './passenger.css';

class Passenger extends Component {
	render() {
		return(
		<div className="card passenger border border-dark m-2">
			<div className="card-block">
				<h3 className="card-title pt-2">{this.props.passenger.firstName}{' '}
									   	   {this.props.passenger.lastName}</h3>
				  <p className="card-text">Sex: {this.props.passenger.sex}</p>
				  <p className="card-tex">Race: {this.props.passenger.race}</p>
				  <p className="card-text">Eye Color: {this.props.passenger.eyes}</p>
				  <p className="card-text">Hair Color: {this.props.passenger.hair}</p>
				  <p className="card-text">Height: {this.props.passenger.feet}{'\''}
				                                   {this.props.passenger.inch}</p>
				  <p className="card-text">Weight: {this.props.passenger.weight}</p>	
				<p className="card-text">Excluded From: {this.props.passenger.from}</p>
				<p className="card-text">To: {this.props.passenger.to}</p>									
			</div>
		</div>
		);
	}
}

export default Passenger;