module.exports=((state={users:[],oneuser:[]},action)=>{
    console.log("reducer",action );
    switch(action.type){
        case 'GETALLUSER':
            return ({users:action.users});
        case "ONMODIFY":
            return ({oneUser:action.data});
        default:
            return state;
    }
});
