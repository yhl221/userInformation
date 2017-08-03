import request from "superagent";

export default store => next => action =>{
    console.log(action);
    if(action.type === "MODIFYUSER"){
        request.post('/modifyUser')
            .send({id:action.data})
            .end((err,res)=>{
                next({type:"MODIFYUSER",isModify:res.body.isModify});
            })
    }else{
        next(action);
    }
}