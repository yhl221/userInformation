module.exports = ((state={isModify:''},action)=>{
    console.log("recucer mmodify",action);
    switch(action.type){
        case 'MODIFYUSER':{
            return({isModify:action.isModify});
        }
        default: return state;
    }
});