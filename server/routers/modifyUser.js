const express=require("express");
const router=express.Router();

router.post('/findOne',(req,res)=>{
    console.log('sdjfkdsjgf');
    console.log("req+++",req.body);
});

module.exports=router;