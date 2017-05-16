import React, { Component } from 'react';
import Form from './Form';
import Messages from './Messages';

const Main = () => (<div>
  <div className="row center">
    <img src="mia.jpg" className="mb2" />
  </div>
  <div className="row">
    <Form />
    <Messages />
  </div>
</div>)

export default Main;