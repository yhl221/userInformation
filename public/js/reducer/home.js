module.exports=((state={users:[],information:[]},action)=>{
    console.log("reducer",action.userInformation );
    switch(action.type){
        case 'GETALLUSER':
            return ({users:action.users});
        case "SEARCHUSER":
            return ({users:action.userInformation})
        default:
            return state;
    }
});
