const home=require('../../public/js/reducer/home');
const expect = require('chai').expect;

describe('getAll user and search user',()=>{
    it('change value of users with "GETALLUSER"',()=>{
        const state={users:[]};
        const action = {type:"GETALLUSER",users:[{age:34,email: "dbf", mark: "bfg",
        name: "fg",phone: "fgvd",sex: "fsdf",user_id: 19,user_name: "wsf"}]}

        expect(home(state,action)).to.be.deep.equal({users:[{age:34,email: "dbf", mark: "bfg",
            name: "fg",phone: "fgvd",sex: "fsdf",user_id: 19,user_name: "wsf"}]});
    });

    it('change value of user with "SEARCHUSER"',()=>{
        const state={users:[]};
        const action={type:"SEARCHUSER",userInformation:{age:34,email: "dbf", mark: "bfg", name: "fg",
            phone: "fgvd",sex: "fsdf",user_id: 19,user_name: "wsf"}};
        expect(home(state,action)).to.be.deep.equal({users:{age:34,email: "dbf", mark: "bfg", name: "fg",
                phone: "fgvd",sex: "fsdf",user_id: 19,user_name: "wsf"}});
    })

});