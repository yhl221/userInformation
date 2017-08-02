import React from 'react';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import User from "./container/user";
import reducer from "./reducer/index";
import {createStore, applyMiddleware} from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={User}/>
        </Router>
    </Provider>, document.getElementById('app'));