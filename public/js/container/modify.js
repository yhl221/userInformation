import {connect} from "react-redux";
import Modify from "../component/modify";

const mapStateToProps = (state) => {

    return {
        oneUser: state.Modify.oneUser,
        isModify: state.Modify.isModify
    }

};

const mapDispatchToProps = (dispatch) => {

    return {
        onModify: (data)=> {
            dispatch({type: "MODIFYUSER", data: data});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Modify);


