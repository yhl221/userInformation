import {connect} from "react-redux";
import Modify from "../component/modify";
const mapStateToProps= (state) => {
    console.log("modify",state.Home.oneUser);
    return{
        oneUser:state.Home.oneUser
    }
};

const mapDispatchToProps = (dispatch) => {
  return{
      onModify:(data)=>{
          console.log("userdata:::::",data);
          dispatch({type:"MODIFYUSER",data:data});
      }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Modify);


