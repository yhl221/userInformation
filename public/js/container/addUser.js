import {connect} from "react-redux";
import AddUser from "../component/addUser";

const mapStateToProps = (state)=> {

    return {
    }
};

const mapDispatchToProps = (dispatch)=>{

    return {
        onSubmit:(data)=>{
            dispatch({type:"POSTMESSAGE",data});
            console.log(data);
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddUser);
