const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    userId:{
        type: String,        
    },
    name:{
        type: String,        
    },
    email:{
        type: String,        
    },
    mobileNo:{
        type: Number,        
    },
    qrCodeLink:{
        type: String,        
    },
    
},{timestamps:true})

module.exports = mongoose.model("User", userSchema)