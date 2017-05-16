var express = require('express');
var app = express();
var db = require('./models').db;
var nunjucks = require('nunjucks');
var volleyball = require('volleyball');
var bodyParser = require('body-parser');
var router = require('./routes');

// logging middleware
app.use(volleyball);

// body-parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// nunjucks boilerplate
nunjucks.configure('views', { noCache: true });
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

// statically serving public folder
app.use(express.static(__dirname + '/public'));

// add routes
app.use(router);

// error-handling middleware
app.use(function (err, req, res, next) {
	var status = err.status || 500;
	console.error(err);
	res.send("There was a problem: ", status);
});

// sync w/ db and app listen on a port
db.sync()
.then(function(){
	console.log('all sync\'d with the db!');
	app.listen(1234, function(){
		console.log('app is listening intently on port 1234...')
	})
})
.catch(console.error)