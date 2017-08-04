const addUser=require('../../public/js/reducer/add');
const  expect=require('chai').expect;

describe('/addUserReducer', ()=> {
    it('save userInformation with "ADDUSER"', ()=> {
        const state = {isSave: false};
        const action = {type: "ADDUSER", isSaved: true};
        expect(addUser(state, action)).to.be.deep.equal({isSaved: true});
    });

    it('reset the state of isSaved', function () {
        const state = {isSaved: false};
        const action = {type: "RESET", isSaved: false};
        expect(addUser(state, action)).to.be.deep.equal({isSaved: false});
    })
});