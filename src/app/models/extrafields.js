const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');


const FieldSchema = new mongoose.Schema({
    
    name: { type: String, required: true },
    leader: { type: String, required: true },
    unit_id: { type: String, unique: false },
    address: { type: String, required: true },
    diginf: { type: String, required: true },
    phone: { type: String, required: true },
    description: { type: String, required: true },
});
// {
//     timestamps: true,
// });

// mongoose.plugin(slug);


module.exports = mongoose.model("collection3",FieldSchema)

