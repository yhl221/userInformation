import request from "superagent"

module.exports = store => next => action => {

    if (action.type === "MODIFYUSER") {
        request.post('/modifyUser')
            .send({type: "MODIFYUSER", data: action.data})
            .end((err, req)=> {
                next({type: "MODIFYUSER", isModify: req.body});
            })
    } else {
        next(action);
    }

};