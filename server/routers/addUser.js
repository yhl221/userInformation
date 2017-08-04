let express = require('express');
let router = express.Router();
let insertUser = require('../dbs/addUser');

router.post('/insertUser', (req, res)=> {
    let data = req.body;
    const userInformation = [];
    for (let key in data) {
        userInformation.push(data[key]);
    }
    insertUser(userInformation, (result)=> {
        res.send(true);
    })
});

module.exports = router;