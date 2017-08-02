import React from 'react';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import User from "./container/user";
import AddUser from "./container/addUser";
import reducer from "./reducer/index";
import Home from "./container/getAll";
import {createStore, applyMiddleware} from 'redux';
import addMiddleware from "./middleware/add";
import getAllMiddleware from "./middleware/getAll"


const createStoreWithMiddleware = applyMiddleware(addMiddleware,getAllMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/add" component={AddUser}/>
        </Router>
    </Provider>, document.getElementById('app'));