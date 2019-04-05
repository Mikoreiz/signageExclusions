var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/signageExclusion', {useNewUrlParser: true});
var Schema = mongoose.Schema;
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var passenger = new Schema({
	firstName : String,
	lastName  : String,
    sex       : String,
    eyes      : String,
    hair      : String,
    feet      : String,
    inch      : String,
    weight    : String,
    race      : String,
    from      : Date,
    to        : Date
});

var excPass = mongoose.model('passenger', passenger);

//CREATE
app.post('/add',function(request, response){
	var passenger = new excPass();
	passenger.firstName = request.body.firstName;
	passenger.lastName = request.body.lastName;
	passenger.sex = request.body.sex;
	passenger.eyes = request.body.eyes;
	passenger.hair = request.body.hair;
	passenger.feet = request.body.feet;
	passenger.inch = request.body.inch;
	passenger.weight = request.body.weight;
	passenger.race = request.body.race;
	passenger.from = request.body.from;
	passenger.to = request.body.to;
	passenger.save(function(err, savedPassengers){
		if (err) {
			response.status(500).send({error: 'Could not save passenger info'});
		} else {
			console.log(passenger);
		}
		response.redirect('/addPage');
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

app.get('/addPage', function (request, response)
{
    response.render('adder');
});

//UPDATE
// app.post('/update',function(request, response){
// 	
// });

//DELETE
// app.get('/delete',function(request, response){
// 	
// });

app.listen(3001, function() {
console.log("Passenger API running on port 3001...");
});
