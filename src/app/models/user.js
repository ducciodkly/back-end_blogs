const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const LogInSchema = new mongoose.Schema({

    Username:{type:String,required:true},
    Password:{type:String,required:true},
    Permission:{type:String,required:true},
    AccessStatus:{type:String,required:true},
    LastLoginTime:{type:String,required:true},

},
{
    timestamps: true,
    // _id: false
})

module.exports = mongoose.model("collection1",LogInSchema)

