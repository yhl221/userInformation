import React from 'react';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import User from "./container/user";
import AddUser from "./container/addUser";
import reducer from "./reducer/index";
import {createStore, applyMiddleware} from 'redux';
import addMiddleware from "./middleware/add";



const createStoreWithMiddleware = applyMiddleware(addMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AddUser}/>
        </Router>
    </Provider>, document.getElementById('app'));