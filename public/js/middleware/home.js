import request from "superagent";

export default store => next => action => {

    if (action.type === "GETALLUSER") {
        request.post('/getAllUser')
            .end((err, res)=> {
                next({type: "GETALLUSER", users: res.body.users})
            })
    }else if(action.type === "SEARCHUSER"){
        request.post('/searchUser')
            .end((err, res)=> {
                next({type: "SEARCHUSER", userName: res.body})
            })
    }
    else {
        next(action);
    }
}