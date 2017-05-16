import React, { Component } from 'react';

class Messages extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (<div className="col col-6 pl3">
			<h1>Sent Messages:</h1>
			<ul>
				{
					this.props.messages && this.props.messages.map(message => (
						<div>
							<li className="mb1">"{ message.text }"</li>
							<li className="mb1 italic">--from { message.user.email }</li>
						</div>
					))
				}
			</ul>
		</div>)
	}
}

export default Messages;