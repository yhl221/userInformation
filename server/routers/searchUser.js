const express=require("express");
const router=express.Router();
const searchUser=require('../dbs/searchUser');

router.post('/searchUser',(req,res)=>{
    console.log(req.body)
    let ID=req.body.userID;
    searchUser(ID,(result)=>{
        console.log(result);
        res.send({information:result});
    })
});

module.exports=router;