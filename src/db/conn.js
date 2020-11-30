const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/hecker-news', {useNewUrlParser: true,useFindAndModify:false, useUnifiedTopology: true},)
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err))