import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { polyfillLoader } from 'polyfill-io-feature-detection';
import reducer from './js/redux/reducers/index';
import {fetchUser} from './js/redux/actions/index';
import App from './js/App';

import './styles/main.less';

polyfillLoader({
    "features": "Promise,fetch",
    "onCompleted": main
});

const store = createStore(reducer, window.__PRELOADED_STATE__, applyMiddleware(thunkMiddleware));


function main() {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementsByTagName('main')[0]
    );
}
