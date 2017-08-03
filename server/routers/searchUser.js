const express=require("express");
const router=express.Router();

router.post('/searchUser',(req,res)=>{
    console.log(req.body)
});

module.exports=router;