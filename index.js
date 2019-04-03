var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/signageExclusion', {useNewUrlParser: true});
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var passenger = new Schema({
	firstName : String,
	lastName  : String,
	startExc  : Date,
	endExc    : Date,
// 	img       : String; 
});

var excPass = mongoose.model('passenger', passenger);

//CREATE
app.post('/add',function(request, response){
	var passenger = new excPass();
	passenger.firstName = request.body.firstName;
	passenger.lastName = request.body.lastName;
	passenger.startExc = request.body.startExc;
	passenger.endExc = request.body.endExc;
	product.save(function(err, savedPassengers){
		if (err) {
			response.status(500).send({error: 'Could not save passenger info'});
		} else {
			response.send(savedPassengers);
		}
	});
});

//READ
app.get('/screen',function(request, response){
	excPass.find({}, function(err, passengers){
		if (err) {
			console.log("Could not fetch");
		} else {
			response.send(passengers);
		}
	});
});

//UPDATE
// app.post('/update',function(request, response){
// 	
// });

//DELETE
// app.get('/delete',function(request, response){
// 	
// });

app.listen(3000, function() {
console.log("Passenger API running on port 3000...");
});
