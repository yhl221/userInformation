import request from "superagent";

export default store => next => action => {

    if (action.type === "GETALLUSER") {
        console.log("action: ",action.type);
        request.post('/getAllUser')
            .end((err, res)=> {
                next({type: "GETALLUSER", isFind: res.body})
            })
    } else {
        next(action);
    }
}