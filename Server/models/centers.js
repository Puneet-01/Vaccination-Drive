const mongoose=require('mongoose')
const Schema=mongoose.Schema

const centersList = new Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    doses:{
        type:Number,
        required:true
    }
})

const Centers=mongoose.model("Centers",centersList)
module.exports=Centers;

