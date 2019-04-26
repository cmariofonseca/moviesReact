import React from 'react';
import ReactDOM from 'react-dom';

// Redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import App from './components/app/App';
import reducers from './store/reducers';

import './index.css';

const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

const nodes = (
  <Provider store={storeWithMiddleware(reducers)}>
    <App />
  </Provider>
);

ReactDOM.render(nodes, document.getElementById('root'));