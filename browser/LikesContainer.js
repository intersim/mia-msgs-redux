import React, { Component } from 'react';
import store from './redux';
import Likes from './Likes';

class LikesContainer extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0
        }

        this.addLike = this.addLike.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                likes: store.getState().likes
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    addLike() {
        store.dispatch({
            type: 'ADD_LIKE'
        })
    }

    render() {
        return <Likes likes={this.state.likes} addLike={this.addLike} />
    }
}

export default LikesContainer;