var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/mia_msgs');

var Message = db.define('Message', {
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	date: Sequelize.DATE
}, {
	hooks: {
		beforeValidate: function(message){
			message.date = new Date();
		}
	}
});

var User = db.define('User', {
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	}
});

Message.belongsTo(User);
User.hasMany(Message);

module.exports = {
	db: db,
	Message: Message,
	User: User
}
