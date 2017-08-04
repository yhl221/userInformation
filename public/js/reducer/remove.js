module.exports = ((state = {isRemoved: false}, action)=> {

    switch (action.type) {
        case "REMOVEUSER":
            return ({isRemoved: action.isRemoved});
        default:
            return state;
    }
});
