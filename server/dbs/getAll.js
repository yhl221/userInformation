
let db = require('../helps/get-urls');
let userSQL = require('../helps/userSql');

function getAll(callback) {
    db.query(userSQL.queryAll,function (err, result) {
        if (err) {
            return err;
        }
        else {
            callback(result);
        }
    });
}
module.exports = getAll;

