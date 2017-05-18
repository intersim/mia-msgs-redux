import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer';
import { Provider } from 'react-redux';
import store from './redux';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);