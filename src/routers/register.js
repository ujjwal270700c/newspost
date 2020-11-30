const express=require("express");
const regRouter=new express.Router();
const Register=require("../models/register")

regRouter.get("/register",(req,res)=>{
    res.render("register");
})
regRouter.post("/register",async(req,res)=>{
    try{
        const password=req.body.password;
        const cpassword=req.body.re_password;
        if(password===cpassword){
           const registerMember=new Register({
               name:req.body.name,
               email:req.body.email,
               password:req.body.password,
               re_password:req.body.re_password
           })
           const register=await registerMember.save();
           res.status(201).render("index")
        }else{
            res.send("password not match");
        }
   }catch(e){
         res.status(400);
   }
})

module.exports=regRouter;