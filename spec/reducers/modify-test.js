const modifyUser=require('../../public/js/reducer/modify');
const expect=require('chai').expect;

describe('test the state of modify user',()=>{
    it('change the state of  "MODIFYUSER"',()=>{
        const state = {isModify: false};
        const action={type:"MODIFYUSER",isModify:true};

        expect(modifyUser(state,action)).to.be.deep.equal({isModify:true});
    });

    it('get the information of oneUser',()=>{
        const state={oneUser:[]};
        const action={type:"ONMODIFY",data:{age:34,email: "dbf", mark: "bfg",
            name: "fg",phone: "fgvd",sex: "fsdf",user_id: 19,user_name: "wsf"}};

            expect(modifyUser(state,action)).to.be.deep.equal({oneUser:{age:34,email: "dbf", mark: "bfg",
                name: "fg",phone: "fgvd",sex: "fsdf",user_id: 19,user_name: "wsf"}});
    })
    }
);