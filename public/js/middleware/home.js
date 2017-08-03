import request from "superagent";

export default store => next => action => {

    if (action.type === "GETALLUSER") {
        request.post('/getAllUser')
            .end((err, res)=> {
                next({type: "GETALLUSER", users: res.body.users})
            })
    }else if(action.type === "SEARCHUSER"){
        request.post('/searchUser')
            .send({type:"SEARCHUSER",userID:action.data})
            .end((err, res)=> {
                next({type: "SEARCHUSER", userInformation: res.body.information})
            })
    }
    else {
        next(action);
    }
}