const express= require("express");
const hbs=require("hbs")
const app=express();
const path=require("path");
const registerRouter=require("../src/routers/register");
const newsRouter=require("../src/routers/news");
const Register = require("./models/register");
const NewsSh = require("./models/news");
require("./db/conn")
const port=process.env.PORT || 7500;

const view_path=path.join(__dirname,"../templets/views")
const partial_path=path.join(__dirname,"../templets/partials")
app.set("view engine","hbs");
app.set("views",view_path);
hbs.registerPartials(partial_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(registerRouter)
app.use(newsRouter)

app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/",async(req,res)=>{
    try{
     
        const email=req.body.email;
        const password=req.body.password;

        const useremail=await Register.findOne({email});
        if(useremail.password===password){
            res.status(201).render("news");
        }else{
            res.status(400).send("Password are not matching");
        }

    }catch(error){
      res.status(400).send("invalid Email")
    }
})
app.get("/post",async(req,res)=>{
    res.render("post")
})
app.post("/post",async(req,res)=>{
    try{
        const user= new NewsSh({
            title:req.body.title,
            body:req.body.content,
            created_by:req.body.created_by
        })
        const createpost=await user.save()
        res.status(201).render("news");
    }catch(e){
        res.status(400).send(e);
    }
 })



app.listen(port,()=>{
    console.log(`server running at port:${port}`);
})