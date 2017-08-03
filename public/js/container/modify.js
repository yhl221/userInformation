import {connect} from "react-redux";
import Modify from "../component/modify";
const mapStateToProps=(sate)=>{
    return {

    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        findOne:(ID)=>{
            console.log(ID);
            dispatch({type:"FINDONE",data:ID})
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps())(Modify);


