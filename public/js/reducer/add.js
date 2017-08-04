module.exports = ((state = {isSaved: false}, action)=> {

    switch (action.type) {
        case 'ADDUSER': {
            return ({isSaved: action.isSaved});
        }
        case "RESET": {
            return ({isSaved: false})
        }
        default:
            return state;
    }
});