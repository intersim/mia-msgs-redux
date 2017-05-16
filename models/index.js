const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/mia_msgs', { logging: false });

const Message = db.define('Message', {
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	date: Sequelize.DATE,
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	}
}, {
	hooks: {
		beforeValidate: (message) => message.date = new Date()
	}
});

module.exports = {
	db,
	Message
}
