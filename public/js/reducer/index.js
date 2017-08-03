import {combineReducers} from 'redux';
import AddUser from "./add";
import Home from "./home";
import Modify from "./modify"
export default combineReducers({
    AddUser,
    Home,
    Modify
});
