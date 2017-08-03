const express=require('express');
const router=express.Router();
const removeUser=require('../dbs/removeUser');

router.post('/removeUser',(req,res)=>{
    console.log(req.body);
    let userID=req.body.userID;
    removeUser(userID,(result)=>{
        console.log(result);
        res.send(true);
    })
});

module.exports=router;