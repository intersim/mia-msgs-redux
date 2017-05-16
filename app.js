const express = require('express');
const app = express();
const db = require('./models').db;
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const router = require('./routes');
const path = require('path');

// logging middleware
app.use(volleyball);

// body-parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// statically serving public folder
app.use(express.static(__dirname + '/public'));

// add routes
app.use('/api', router);

app.get('/', (req, res, next) => res.send(path.join(__dirname, './public/index.html')));

// error-handling middleware
app.use(function (err, req, res, next) {
	var status = err.status || 500;
	console.error(err);
	res.send("There was a problem: ", status);
});

// sync w/ db and app listen on a port
db.sync()
.then(function(){
	console.log('All sync\'d with the db!');
	app.listen(1234, function(){
		console.log('Server is listening intently on port 1234...')
	})
})
.catch(console.error)