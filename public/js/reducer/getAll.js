module.exports=((state={users:''},action)=>{
    console.log(action.type);
    switch(action.type){
        case 'GETALLUSER':
            return ({users:action.users});
        default:
            return state;
    }
});
