import {connect} from "react-redux";
import AddUser from "../component/addUser";

const mapStateToProps = (state)=> {
     console.log(state);
    return {
        isSaved:state.AddUser.isSaved
    }
};

const mapDispatchToProps = (dispatch)=>{

    return {
        onSubmit:(data)=>{
            console.log("dadddddd",data);
            dispatch({type:"ADDUSER",data});
            console.log(data);
        },
        reset:(flag)=>{
            console.log(flag);
            dispatch({type:"RESET",flag});
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddUser);
