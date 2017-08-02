//server/routers/insertUser.js
let express = require('express');
let router = express.Router();

let db = require('../helps/get-urls');

let userSQL = require('../helps/userSql');

router.post('/insertUser', (req, res) => {
    console.log(req.body);
    db.query(userSQL.insert, [req.body.userName, req.body.name, parseInt(req.body.age),
        req.body.sex, req.body.phone, req.body.email, req.body.mark], function (err, result) {
        if (err) {
            return err;
        }
        else{
            res.send(true);
        }
    });
});

module.exports = router;

