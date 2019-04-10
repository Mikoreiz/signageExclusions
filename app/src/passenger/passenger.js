import React, {Component} from 'react';
import './passenger.css';
import moment from 'moment';

class Passenger extends Component {
	render() {
		return(
		<div className="card passenger border border-dark m-2">
			<div className="card-block">
				<h3 className="card-title pt-2">{this.props.passenger.firstName}{' '}
									   	   {this.props.passenger.lastName}</h3>
				  <p className="card-text"><b>Sex:</b> {this.props.passenger.sex}</p>
				  <p className="card-tex"><b>Race:</b> {this.props.passenger.race}</p>
				  <p className="card-text"><b>Eye Color:</b> {this.props.passenger.eyes}</p>
				  <p className="card-text"><b>Hair Color:</b> {this.props.passenger.hair}</p>
				  <p className="card-text"><b>Height:</b> {this.props.passenger.feet}{'\''}
				                                   {this.props.passenger.inch}</p>
				  <p className="card-text"><b>Weight:</b> {this.props.passenger.weight}{' lbs'}</p>	
				<p className="card-text"><b>Excluded From:</b> {moment(this.props.passenger.from).format('MM/DD/YY')}</p>
				<p className="card-text"><b>To:</b> {moment(this.props.passenger.to).format('MM/DD/YY')}</p>									
			</div>
		</div>
		);
	}
}

export default Passenger;