import {connect} from "react-redux";
import Home from "../component/home";

const mapStateToProps = (state)=> {

    return {
        user: state.Home.users,
        isRemoved: state.Remove.isRemoved
    }

};


const mapDispatchToProps = (dispatch)=> {

    return {
        getAllUser: ()=> {
            dispatch({type: "GETALLUSER"});
        },
        onModify: (user)=> {
            dispatch({type: "ONMODIFY", data: user});
        },
        onSearch: (userID)=> {
            dispatch({type: "SEARCHUSER", data: userID});
        },
        onRemove: (userID)=> {
            dispatch({type: "REMOVEUSER", data: userID});
        }
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
