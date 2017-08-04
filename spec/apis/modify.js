const server = require("../../server");
const request = require("supertest");

describe('test the api of modify', ()=> {
    it('return success modifyUser', (done)=> {
        request(server)
            .post('/modifyUser')
            .send({
                 data: {
                    age: 30, email: "dbf", mark: "bfg", name: "fg",
                    phone: "fgvd", sex: "fsdf", user_id: 51, user_name: "wsfghf"
                }
            })
            .expect(200, 'true', done);
    })

});
