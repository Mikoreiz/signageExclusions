const express = require("express")
const paginate = require("express-paginate")
const app = express()
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const db = mongoose.connect("mongodb://localhost/signageExclusion", {
  useNewUrlParser: true
})
const Schema = mongoose.Schema
const multer = require("multer")

app.use(express.static(__dirname + "/public"))
app.set("view engine", "pug")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "uploads")))
app.locals.moment = require("moment")

const storage = multer.diskStorage({
  destination: function(request, file, callback) {
    callback(null, "uploads/")
  },
  filename: function(request, file, callback) {
    callback(null, file.originalname)
  }
})

const imgFilter = (request, file, callback) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    callback(null, true)
  } else {
    callback(null, false)
  }
}

const upload = multer({ storage: storage, imgFilter: imgFilter })

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

const passenger = new Schema({
  firstName: String,
  lastName: String,
  sex: String,
  eyes: String,
  hair: String,
  feet: String,
  inch: String,
  weight: String,
  race: String,
  from: Date,
  to: Date,
  image: String
})

const excPass = mongoose.model("passenger", passenger)

app.post("/add", upload.single("image"), function(request, response) {
  console.log(request.file)
  const passenger = new excPass()
  passenger.firstName = request.body.firstName
  passenger.lastName = request.body.lastName
  passenger.sex = request.body.sex
  passenger.eyes = request.body.eyes
  passenger.hair = request.body.hair
  passenger.feet = request.body.feet
  passenger.inch = request.body.inch
  passenger.weight = request.body.weight
  passenger.race = request.body.race
  passenger.from = request.body.from
  passenger.to = request.body.to
  passenger.image = request.file.originalname
  passenger.save(function(err, savedPassengers) {
    if (err) {
      response.status(500).send({ error: "Could not save passenger info" })
    } else {
      console.log(passenger)
    }
    response.redirect("/addPage")
  })
})

app.get("/addPage", function(request, response) {
  response.render("adder")
})

app.get("/signage", function(request, response) {
  excPass.find({}, function(err, passengers) {
    if (err) {
      console.log("Could not fetch")
    } else {
      response.render("signage", {
        passengers: passengers
      })
    }
  })
})

app.get("/passengers", function(request, response) {
  excPass.find({}, function(err, passengers) {
    if (err) {
      console.log("Could not fetch")
    } else {
      response.render("passengers", {
        passengers: passengers
      })
    }
  })
})

app.get("/editPass/:_id", function(request, response) {
  excPass.findById({ _id: request.params._id }, function(err, passenger) {
    if (err) {
      console.log("Could not fetch")
    } else {
      response.render("editPassengers", {
        passenger: passenger
      })
    }
  })
})

app.post("/updatePass/:_id", function(request, response) {
  var updatedPass = {
    firstName: request.body.upFirst,
    lastName: request.body.upLast,
    sex: request.body.upSex,
    eyes: request.body.upEyes,
    hair: request.body.upHair,
    feet: request.body.upFeet,
    inch: request.body.upInch,
    weight: request.body.upWeight,
    race: request.body.upRace,
    from: request.body.upFrom,
    to: request.body.upTo
  }
  excPass.findOneAndUpdate(
    { _id: request.params._id },
    updatedPass,
    { upsert: true },
    function(err, passenger) {
      if (err) {
        console.log("Could not update")
      } else {
        console.log("Updated")
        response.redirect("/passengers")
      }
    }
  )
})

app.get("/delete/:_id", function(request, response) {
  excPass.deleteOne({ _id: request.params._id }, function(err) {
    if (err) {
      console.log("Could not remove")
    } else {
      console.log("Removed")
      response.redirect("/passengers")
    }
  })
})

app.listen(3001, function() {
  console.log("Passenger API running on port 3001...")
})
