const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const LogInSchema = new mongoose.Schema({


    Name:{type:String,},
    Title:{type:String,},
    Summary:{type:String,},
    Content:{type:String,},
},
{
    timestamps: true,
    // _id: false
    
})

module.exports = mongoose.model("news",LogInSchema)

