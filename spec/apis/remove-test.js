const server = require("../../server");
const request = require("supertest");

describe('test the api of home', ()=> {
    it('return success removeUser', (done)=> {
        request(server)
            .post('/removeUser')
                .send({userID: 1})
            .expect(200, 'true', done);
    })
});
