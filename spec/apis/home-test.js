const server = require("../../server");
const request = require("supertest");

describe('test the api of home', ()=> {
        it('return success allUsers', (done)=> {
            request(server)
                .post('/searchUser')
                .send({userID: 2})
                .expect(200,done);
        });
    }

);