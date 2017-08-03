import request from "superagent";

export default store => next => action =>{
    console.log("action+++++",action);
    if(action.type === "MODIFYUSER"){
        request.post('/modifyUser')
            .send({type:"MODIFYUSER",data:action.data})
            .end((err,req)=>{
                next({type:"MODIFYUSER",isModify:req.body});
            })
    }else{
        next(action);
    }
}