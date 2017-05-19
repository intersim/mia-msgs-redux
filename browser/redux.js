import { createStore } from 'redux';

const initialState = {
    likes: 0
}

// createStore takes reducing function
const reducer = (state=initialState, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case 'ADD_LIKE': 
            newState.likes++;
            return newState;
        default:
            return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;