var express = require('express');
var router = express.Router();
var Message = require('../models').Message;
var User = require('../models').User;

// this will be replaced soon by info from the DB
// var messages = [
// 	{
// 		text: "Hi!",
// 		email: "nick@nick.com"
// 	}, 
// 	{
// 		text: "Hello there.",
// 		email: "molly@molly.com"
// 	}, 
// 	{
// 		text: "Do you want a treat?",
// 		email: "emily@emily.com"
// 	}
// ];

// route to handle homepage
router.get('/', function(req, res, next){
	// try {
	// 	synchronousMethod();
	// } catch(err) {
	// 	next(err);
	// }

	Message.findAll()
	.then(function(messages){
		res.render('index', {
			messages: messages
		});
	})
	.catch(next);
});

router.get('/messages', function(req, res, next){
	Message.findAll({
		where: req.query
	})
	.then(function(messages){
		if (!messages.length) return res.send('No such messages!')
		res.json(messages);
	})
	.catch(next);
});

router.get('/messages/:id', function(req, res, next){
	var id = req.params.id;
	Message.findById(id)
	.then(function (message) {
		res.json(message);
	})
	.catch(next);
});

router.post('/messages', function(req, res, next){
	Message.create(req.body)
	.then(function(message){
		res.status(201).json({
			message: message
		});
	})
	.catch(next);
});

router.put('/messages', function(){

});

router.delete('/messages', function(){

});

module.exports = router;