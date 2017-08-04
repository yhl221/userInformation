const express = require("express");
const router = express.Router();
const searchUser = require('../dbs/searchUser');

router.post('/searchUser', (req, res)=> {

    let ID = req.body.userID;
    searchUser(ID, (result)=> {
        res.send({information: result});
    })
});

module.exports = router;