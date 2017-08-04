let db = require('../helps/get-urls');
let userSQL = require('../helps/userSql');


function modifyUser(userInformation, callback) {

        db.query(userSQL.update, userInformation, function (err, result) {
            if (err) {
                return err;
            }
            else {
                callback(result);
            }
        });
}
module.exports = modifyUser;

