import {connect} from "react-redux";
import AddUser from "../component/addUser";

const mapStateToProps = (state)=> {

    return {
        isSaved: state.AddUser.isSaved
    }

};

const mapDispatchToProps = (dispatch)=> {

    return {
        onSubmit: (data)=> {
            dispatch({type: "ADDUSER", data});
        },
        reset: (flag)=> {
            dispatch({type: "RESET", flag});
        }
    }

};


export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
