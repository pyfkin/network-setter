import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
