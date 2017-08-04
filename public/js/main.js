import React from 'react';
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from 'react-router';
import AddUser from "./container/addUser";
import Modify from "./container/modify"
import reducer from "./reducer/index";
import Home from "./container/home";
import {createStore, applyMiddleware} from 'redux';
import addMiddleware from "./middleware/add";
import getAllMiddleware from "./middleware/home";
import modifyMiddleware from "./middleware/modify";

const createStoreWithMiddleware = applyMiddleware(addMiddleware, getAllMiddleware, modifyMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/add" component={AddUser}/>
            <Route path="/modify" component={Modify}/>
        </Router>
    </Provider>, document.getElementById('app'));