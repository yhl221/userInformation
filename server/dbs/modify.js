
let db = require('../helps/get-urls');
let userSQL = require('../helps/userSql');



function modifyUser(userInformation,callback) {
   'UPDATE user_inform SET user_name=?,name=?,age=?,sex=?,phone=?,email=?,mark=? WHERE user_id=?',

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

