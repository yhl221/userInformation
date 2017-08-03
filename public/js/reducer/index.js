import {combineReducers} from 'redux';
import AddUser from "./add";
import GetUser from "./home";
export default combineReducers({
    AddUser,
    GetUser
});
