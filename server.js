var express = require("express");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");

var Article = require("./models/Article");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("./public"));

mongoose.connect("mongodb://localhost/nytreact");

var db = mongoose.connection;
db.on("error", function(err) {
	console.log("Mongoose Error: ", err);
});
db.once("open", function() {
	console.log("Mongoose successfully connected.");
});

app.get("/", function(req, res) {
	res.sendFile(nytreact + "/public/index.html");
});

app.get("/api", function(req, res) {
	
	Article.find({}).sort([
		["date", "descending"]

	]).limit(10).exec(function(err, doc) {
		if (err) {
			console.log(err);
		}
		else {
			res.send(doc);

		}
	});
});

app.post("/api", function(req, res) {
	console.log("BODY: " + req.body.title);

	Article.create({
		title: req.body.title,
		date: Date.now()
	}, function(err) {
		if (err) {
			console.log(err);
		}
		else {
			res.send("Search Saved");

		}
	});
});	


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);

});