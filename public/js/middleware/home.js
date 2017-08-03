import request from "superagent";

export default store => next => action => {

    if (action.type === "GETALLUSER") {
        request.post('/getAllUser')
            .end((err, res)=> {
                next({type: "GETALLUSER", users: res.body.users})
            })
    }else {
        next(action);
    }
}