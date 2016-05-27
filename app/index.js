import 'flexboxgrid/dist/flexboxgrid.min.css';

import { render } from 'react-dom';
import React from 'react';
import App from './App';
import './style.css';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducers';
import reduxLogger from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

const node = document.getElementById('app');

let middleware = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
  const loggerMiddleware = reduxLogger();
  middleware = [...middleware, loggerMiddleware];
}

const store = createStore(
  combineReducers({
    reducer,
  }), undefined,
  compose(
    applyMiddleware(
      ...middleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  node
);
