const express=require("express");
const pool=require("../pool");
const router=express.Router();
router.get("/",(req,res)=>{
    var verify=req.session.phone;
    res.send(verify);
})
module.exports=router;//导出路由器