module.exports=((state={users:[],oneuser:[]},action)=>{
    console.log("reducer",action.users );
    switch(action.type){
        case 'GETALLUSER':
            return ({users:action.users});
        case "FINDONE":
            return ({onUser:action.data});
        default:
            return state;
    }
});
