import { createStore } from 'redux';

const initialState = {
    likes: 0
}

// createStore takes reducing function
const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_LIKE': 
            state.likes++;
            return state;
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => {
//   console.log(store.getState());
});

export default store;