const mongoose=require("mongoose");

const newsSchema=mongoose.Schema({
 
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    created_by:{
        type:String,
        required:true
    }

})

const NewsSh= new mongoose.model('newsdata',newsSchema);

module.exports=NewsSh;