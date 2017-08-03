import {connect} from "react-redux";
import Home from "../component/home";

const mapStateToProps = (state)=> {
    console.log("usrs+++",state);
    return {
        user:state.GetUser.users
    }
};


const mapDispatchToProps=(dispatch)=>{
    return {
        getAllUser:()=>{
            dispatch({type:"GETALLUSER"});
        },
        onModify:(user)=>{
            dispatch({type:"MODIFYUSER",data:user});
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);
