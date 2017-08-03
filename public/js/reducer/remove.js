module.exports=((state={isRemoved:false},action)=>{
    console.log("reducer",action );
    switch(action.type){
        case "REMOVEUSER":
            return ({isRemoved:action.isRemoved});
        default:
            return state;
    }
});
