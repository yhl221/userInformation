import {combineReducers} from 'redux';
import AddUser from "./add";
import GetUser from "./getAll";
export default combineReducers({
    AddUser,
    GetUser
});
