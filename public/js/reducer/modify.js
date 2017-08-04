module.exports = ((state = {isModify: false, oneuser: []}, action)=> {

    switch (action.type) {
        case "MODIFYUSER":
            return ({isModify: action.isModify});
        case "ONMODIFY":
            return ({oneUser: action.data});
        default:
            return state;
    }
});