import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            text: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.addMessage(this.state);

        this.setState({
            email: '',
            text: ''
        });
    }

    render() {
        return <Form 
            handleChange={this.handleChange}  
            handleSubmit={this.handleSubmit} 
            emailVal={this.state.email}
            textVal={this.state.text}
        />
    }
}

export default FormContainer;