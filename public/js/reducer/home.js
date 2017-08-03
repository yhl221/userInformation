module.exports=((state={users:[]},action)=>{
    console.log("reducer",action );
    switch(action.type){
        case 'GETALLUSER':
            return ({users:action.users});
        default:
            return state;
    }
});
