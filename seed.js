const { db, Message } = require('./models');

const messages = [
	{
		text: "Hi!",
		email: "nick@nick.com"
	}, 
	{
		text: "Hello there.",
		email: "molly@molly.com"
	}, 
	{
		text: "Do you want a treat?",
		email: "emily@emily.com"
	}
];

db.sync({force: true})
.then(() => {
  console.log("Dropped old data, now inserting new data");
  const creatingMessages = messages.map(message => Message.create(message));

  return Promise.all([creatingMessages]);
})
.then(() => console.log("Finished inserting data (press ctrl-c to exit)"))
.catch(err => console.error('There was a problem', err, err.stack));