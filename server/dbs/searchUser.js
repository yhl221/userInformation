let db = require('../helps/get-urls');
let userSQL = require('../helps/userSql');

function searchUser(userID, callback) {
    db.query(userSQL.queryById, userID, function (err, result) {
        if (err) {
            return err;
        }
        else {
            callback(result);
        }
    });
}
module.exports = searchUser;

