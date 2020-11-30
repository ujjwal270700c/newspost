const mongoose=require("mongoose");

const memberSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },  re_password:{
        type:String,
        required:true
    }
})

const Register=new mongoose.model("Memberdata",memberSchema);

module.exports=Register;