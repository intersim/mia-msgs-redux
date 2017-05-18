import React from 'react';

const Likes = props => (
    <div>
        <h3>{props.likes} Likes</h3>
        <button onClick={props.addLike}>Click to Like</button>
    </div>
)

export default Likes;