module.exports=((state={users:[]},action)=>{
    console.log("reducer",action.users );
    switch(action.type){
        case 'GETALLUSER':
            return ({users:action.users});
        default:
            return state;
    }
});
