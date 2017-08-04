module.exports = ((state={isSaved:false},action)=>{
    console.log("reducer state",state);
    switch(action.type){
        case 'ADDUSER':{
            return({isSaved:action.isSaved});
        }
        case "RESET":{
            return ({isSaved:false})
        }
        default: return state;
    }
});