const removeUser = require('../../public/js/reducer/remove');
const expect = require('chai').expect;

describe('test the change of removeUser', ()=> {
        it('test the change state of isRemoved', ()=> {
            const state = {isRemoved: false};
            const action = {type: "REMOVEUSER", isRemoved: true};
            expect(removeUser(state, action)).to.be.deep.equal({isRemoved: true})
        })
    }
);