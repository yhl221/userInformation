const express = require('express');
const router = express.Router();
const removeUser = require('../dbs/removeUser');

router.post('/removeUser', (req, res)=> {

    let userID = req.body.userID;
    removeUser(userID, (result)=> {
        res.send(true);
    })

});

module.exports = router;