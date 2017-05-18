import React, { Component } from 'react';

const Messages = props => (<div className="col col-6 pl3">
	<h1>Sent Messages:</h1>
	<ul>
		{
			props.messages.map(message => (
				<div className="pb2" key={message.id}>
					<li className="mb1">"{ message.text }"</li>
					<li className="mb1 italic">--from { message.email }</li>
				</div>
			))
		}
	</ul>
</div>)

export default Messages;