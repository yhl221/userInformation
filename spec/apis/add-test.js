const request=require("supertest");
const addUser=require("../../public/js/middleware/add");
const server = require('../../server');

describe('server',()=>{
    it('return success to add user', (done)=>{
        request(server)
            .post('/insertUser')
            .send({
                user_name: "wsf",name: "fg",age:34,sex: "fsdf", phone: "fgvd",email: "dbf", mark: "bfg"})
            .expect(200,'true', done);
    });
});