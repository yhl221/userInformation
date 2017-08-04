const server = require("../../server");
const request = require("supertest");

describe('test the api of home', ()=> {
        it('return success allUsers', (done)=> {
            request(server)
                .post('/searchUser')
                .send({type: "SEARCHUSER", userID: 2})
                .expect(200, {
                    information: [{
                        age: 34, email: "dbf", mark: "bfg", name: "fg",
                        phone: "fgvd", sex: "fsdf", user_id: 53, user_name: "wsf"
                    }]
                }, done);
        });
    }

);