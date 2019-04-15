import React, {Component} from 'react';
import './passenger.css';
import moment from 'moment';


class Passenger extends Component {
	render() {
		return(
		<div className="card passenger">
			<h3 className="card-header passHead text-center font-weight-bold">{this.props.passenger.firstName}{' '}{this.props.passenger.lastName}</h3>
            <div className="card-body pl-2 pr-2">
            	<div className="row justify-content-center">
            		<img className=" passImg card-img-top" src={this.props.passenger.image} alt="passenger"></img>
            	</div>
            	<div className="row justify-content-start p-2">
					<p className="card-text pr-2"><b>Sex:</b> {this.props.passenger.sex}</p>
					<p className="card-text pr-2 pl-2"><b>Race:</b> {this.props.passenger.race}</p>
					<p className="card-text pl-2 pr-2"><b>Eye Color:</b> {this.props.passenger.eyes}</p>
					<p className="card-text pl-2"><b>Hair Color:</b> {this.props.passenger.hair}</p>
				</div>
				<div className="row justify-content-start pl-2 pr-2">
					<p className="card-text pl-3"><b>Height:</b> {this.props.passenger.feet}{'\''}{this.props.passenger.inch}</p>
					<p className="card-text pl-3"><b>Weight:</b> {this.props.passenger.weight}{' lbs'}</p>	
				</div>
				<div className="row justify-content-start pl-2 pr-2">
					<p className="dates card-text pl-3"><b>Excluded: {moment(this.props.passenger.from).format('MM/DD/YY')} </b>
					 - <b>{moment(this.props.passenger.to).format('MM/DD/YY')}</b></p>									
				</div>
			</div>
		</div>
		);
	}
}

export default Passenger;