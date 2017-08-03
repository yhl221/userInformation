const express =require('express');
const router=express.Router();
const getAllUser=require('../dbs/getAll');

router.post('/getAllUser', (req,res)=> {

     getAllUser((result)=>{
         res.send({users:result});
     })
});

module.exports=router;