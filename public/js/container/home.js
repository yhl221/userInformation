import {connect} from "react-redux";
import Home from "../component/home";


const mapStateToProps=(state)=>{
    return {

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