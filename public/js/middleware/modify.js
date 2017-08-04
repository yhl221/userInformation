const request=requrie("superagent");

module.exports = store => next => action =>{
    console.log("action+++++",action);
    if(action.type === "MODIFYUSER"){
        request.post('/modifyUser')
            .send({type:"MODIFYUSER",data:action.data})
            .end((err,req)=>{
                console.log("isModify",req.body);
                next({type:"MODIFYUSER",isModify:req.body});
            })
    }else{
        next(action);
    }
};