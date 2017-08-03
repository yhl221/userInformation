module.exports=((state={users:[],oneuser:[]},action)=>{
    console.log("reducer",action );
    switch(action.type){
        case 'GETALLUSER':
            return ({users:action.users});
        case "MODIFYUSER":
            return ({oneUser:action.data});
        default:
            return state;
    }
});
