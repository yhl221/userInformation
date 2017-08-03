
let db = require('../helps/get-urls');
let userSQL = require('../helps/userSql');



function removeUser(userID,callback) {

        db.query(userSQL.delete, userID, function (err, result) {
            if (err) {
                return err;
            }
            else {
                callback(result);
            }
        });
}
module.exports = removeUser;

