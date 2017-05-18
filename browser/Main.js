import React, { Component } from 'react';
import FormContainer from './FormContainer';
import Messages from './Messages';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }

    this.addMessage = this.addMessage.bind(this);
  }

  addMessage(msg) {
        axios.post('/api/messages', msg)
        .then(res => res.data)
        .then(({ message }) => 
          this.setState({
          messages: [...this.state.messages, message]
        }));
  }

  componentDidMount() {
    	axios.get('/api/messages')
      .then(res => res.data)
      .then(messages => this.setState({ messages }))
      .catch(console.error.bind(console));
  }

  render() {
    return (<div>
      <div className="row center">
        <img src="mia.jpg" className="mb2" />
      </div>
      <div className="row">
        <FormContainer addMessage={this.addMessage} />
        <Messages messages={this.state.messages} />
      </div>
    </div>)
  }
}

export default Main;