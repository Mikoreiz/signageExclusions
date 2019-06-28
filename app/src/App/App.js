import React, { Component } from 'react';
import './App.css';
import HttpService from '../services/http-services';
import Passenger from '../passenger/passenger';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const http = new HttpService();

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {passenger:[]};
		
		this.loadData = this.loadData.bind(this);
		this.passengertList = this.passengerList.bind(this);
		this.loadData();
	}
	
	//Gets the data from httpService
	loadData = () => {
		var self = this;
		http.getPassengers().then(data => {
			self.setState({passenger: data})
		}, err => {
		
		});
	}
	
	passengerList = () => {
		const list = this.state.passenger.map((passenger) =>
			<div className="row justify-content-center">
			<div className="col-md-3 m-2" key={passenger._id}>
				<Passenger passenger={passenger}/>
			</div>
			</div>
		);
		return (list);
	}
	
	render(){
		return (
		<div className="App mb-5">
			<h5 className="display-4 m-3 font-weight-bold">EXCLUSIONS LIST</h5>
			<div className="container-fluid App-main">
				<div className="card-group">
					{this.passengerList()}
				</div>
			</div>
		</div>
		);
	}
	
}

export default App;
