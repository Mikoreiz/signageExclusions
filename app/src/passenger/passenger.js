import React, {Component} from 'react';
import './passenger.css';

class Passenger extends Component {
	render() {
		return(
		<div className="card">
			<div className="card-block">
				<h3 className="card-title">{this.props.passenger.firstName}{' '}
									   	   {this.props.passenger.lastName}</h3>
				<p className="card-text"> is excluded from the buses.</p>
			</div>
		</div>
		);
	}
}

export default Passenger;