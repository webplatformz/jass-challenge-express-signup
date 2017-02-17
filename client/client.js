import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './js/redux/reducers/index';
import {fetchUser} from './js/redux/actions/index';
import App from './js/App';

import './styles/main.less';

const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(reducer, preloadedState, applyMiddleware(thunkMiddleware));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementsByTagName('main')[0]
);
