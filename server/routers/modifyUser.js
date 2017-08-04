const express = require("express");
const router = express.Router();
const modifyUser = require('../dbs/modify');


router.post('/modifyUser', (req, res)=> {
    const object = req.body.data;
    const information = [];

    for (let key in object) {
        information.push(object[key]);
    }
    modifyUser(information, (result)=> {
        res.send(true);
    });

});

module.exports = router;