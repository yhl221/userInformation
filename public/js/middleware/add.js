import request from "superagent";

export default store => next => action =>{
    if(action.type === "ADDUSER"){
        request.post('/insertUser')
            .send({
                userName:action.data.userName,
                name:action.data.name,
                age:action.data.age,
                sex:action.data.sex,
                phone:action.data.phone,
                email:action.data.email,
                mark:action.data.mark})
            .end((err,res)=>{
                console.log(res.body);
                next({type:"ADDUSER",isSaved:res.body});
            });
    }else{
         next(action);
    }
}