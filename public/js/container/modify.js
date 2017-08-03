import {connect} from "react-redux";
import Modify from "../component/modify";
const mapStateToProps= (state) => {
    console.log("modify",state.GetUser.oneUser);
    return{
        oneUser:state.GetUser.oneUser
    }
};

const mapDispatchToProps = (dispatch) => {
  return{

  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Modify);


