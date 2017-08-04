const addUser=require('../../public/js/reducer/add');
const  expect=require('chai').expect;

describe('/addUserReducer',()=>{
    it('save userInformation with "ADDUSER"',()=>{
        const state={isSave:false};
        const action={type:"ADDUSER",isSaved:true};
        expect(addUser(state,action)).to.be.deep.equal({isSaved:true});
    })
});