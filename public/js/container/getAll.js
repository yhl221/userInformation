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
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Home);
