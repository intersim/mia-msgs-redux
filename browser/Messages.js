import React, { Component } from 'react';
import axios from 'axios';

class Messages extends Component {
	constructor(props) {
		super(props)
		this.state = {
			messages: []
		}
	}

	componentDidMount() {
		axios.get('/api/messages')
		.then(res => res.data)
		.then(messages => this.setState({ messages }))
		.catch(console.error.bind(console));
	}

	render() {
		return (<div className="col col-6 pl3">
			<h1>Sent Messages:</h1>
			<ul>
				{
					this.state.messages.length && this.state.messages.map(message => (
						<div className="pb2" key={message.id}>
							<li className="mb1">"{ message.text }"</li>
							<li className="mb1 italic">--from { message.email }</li>
						</div>
					))
				}
			</ul>
		</div>)
	}
}

export default Messages;