const express=require("express");
const router=express.Router();

router.post('/modifyUser',(req,res)=>{
    console.log("req+++",req.body);
});

module.exports=router;
