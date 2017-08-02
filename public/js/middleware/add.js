import request from "superagent";

export default store => next => action =>{
    console.log(action)
    if(action.type === "POSTMESSAGE"){
        request.post('/postMessage')
            .send({
                userName:action.data.userName,
                name:action.data.name,
                age:action.data.age,
                sex:action.data.sex,
                phone:action.data.phone,
                email:action.data.email,
                mark:action.data.mark})
            .end((err,res)=>{
                next({type:"POSTMESSAGE",isSaved:res.body});
            });
    }else{
         next(action);
    }
}