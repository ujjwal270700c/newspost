const express=require("express");
const NewsSh = require("../models/news");
const hbs=require('hbs')
const newsRouter=new express.Router();


newsRouter.get("/news",async(req,res)=>{
    try{
        const newsData=await NewsSh.find();
        res.send(newsData)
        }catch(e){
           res.status(400).send(e)
        }
})

newsRouter.post("/news",async(req,res)=>{

    try{
        const user= new NewsSh({
            title:req.body.title,
            content:req.body.content,
            created_by:req.body.created_by
        })
        const createpost=await user.save()
        res.status(201).render("news");
    }catch(e){
        res.status(400).send(e);
    }

})

newsRouter.delete("/news/:id",async(req,res)=>{
    try{
       const deleteUser=await NewsSh.findByIdAndDelete(req.params.id);
       if(!deleteUser){
        return res.status(404).send()
    }else{
    res.send(deleteUser);
    }
    }catch(e){
        res.status(500).send(e);

    }
})

newsRouter.put("/news/:id",async (req,res)=>{
    try{
      const updateUser=await NewsSh.findByIdAndUpdate(req.params.id,req.body,{
          new:true
      });
      res.send(updateUser);
    }catch(e){
      res.status(500).send(e);
    }
})

module.exports=newsRouter;