let db = require('../helps/get-urls');
let userSQL = require('../helps/userSql');

function insertUser(userInformation, callback) {
    db.query(userSQL.insert, userInformation, function (err, result) {
        if (err) {
            return err;
        }
        else {
            callback(result);
        }
    });
}
module.exports = insertUser;

