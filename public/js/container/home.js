import {connect} from "react-redux";
import Home from "../component/home";

const mapStateToProps = (state)=> {
    console.log("usrs+++",state);
    return {
        user:state.Home.users
    }
};


const mapDispatchToProps=(dispatch)=>{
    return {
        getAllUser:()=>{
            dispatch({type:"GETALLUSER"});
        },
        onModify:(user)=>{
            dispatch({type:"ONMODIFY",data:user});
        },
        onSearch:(userID)=>{
            console.log(userID);
            dispatch({type:"SEARCHUSER",data:userID});
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);
