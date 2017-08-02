module.exports = ((state={isSaved:''},action)=>{
    switch(action.type){
        case 'ADDUSER':{
            return({isSaved:action.isSaved});
        }
        default: return state;
    }
});