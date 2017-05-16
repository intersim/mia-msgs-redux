const { db, User, Message } = require('./models');

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
.then(function () {
  console.log("Dropped old data, now inserting new data");
  const creatingMessages = messages.map(function (message) {
    return Message.create(message, { include: [ User ] });
  });

  return Promise.all([creatingMessages]);
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});