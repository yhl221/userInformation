module.exports=((state={users:[]},action)=>{
    console.log("reducer",action );
    switch(action.type){
        case 'GETALLUSER':
            return ({users:action.users});
        case "SEARCHUSER":
            return ({users:action.userInformation});
        default:
            return state;
    }
});
