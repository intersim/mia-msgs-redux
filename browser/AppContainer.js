import React, { Component } from 'react';
import FormContainer from './FormContainer';
import Likes from './Likes';
import Messages from './Messages';
import axios from 'axios';
import store from './redux';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      likes: 0
    }

    this.addLike = this.addLike.bind(this);
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

  addLike() {
    store.dispatch({
      type: 'ADD_LIKE'
    });
  }

  componentDidMount() {
    	axios.get('/api/messages')
      .then(res => res.data)
      .then(messages => this.setState({ messages }))
      .catch(console.error.bind(console));

      this.unsubscribe = store.subscribe(() => {
        this.setState({
          likes: store.getState().likes
        })
      })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (<div>
      <div className="row center">
        <img src="mia.jpg" className="mb2" />
        <Likes likes={this.state.likes} addLike={this.addLike} />
      </div>
      <div className="row">
        <FormContainer addMessage={this.addMessage} />
        <Messages messages={this.state.messages} />
      </div>
    </div>)
  }
}

export default Main;
