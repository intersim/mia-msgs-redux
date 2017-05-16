const router = require('express').Router();
const { Message } = require('../models');

router.get('/messages', (req, res, next) => {
	Message.findAll({
		where: req.query
	})
	.then((messages) => {
		if (!messages.length) return res.send('No such messages!')
		res.json(messages);
	})
	.catch(next);
});

router.get('/messages/:id', (req, res, next) => {
	Message.findById(req.params.id)
	.then(message => res.json(message))
	.catch(next);
});

router.post('/messages', (req, res, next) => {
	Message.create(req.body)
	.then(message => res.status(201).json({
			message: message
	}))
	.catch(next);
});

module.exports = router;