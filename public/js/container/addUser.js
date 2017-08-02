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
            dispatch({type:"ADDUSER",data});
            console.log(data);
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(AddUser);
