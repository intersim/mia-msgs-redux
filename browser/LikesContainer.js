import React, { Component } from 'react';
import store from './redux';
import Likes from './Likes';
import { connect } from 'react-redux';

// state to props: likes
// dispatch to props: addLikes

const mapStateToProps = ({ likes }) => ({
    likes
});

const mapDispatchToProps = dispatch => ({
    addLike() {
        dispatch({
            type: 'ADD_LIKE'
        });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Likes);