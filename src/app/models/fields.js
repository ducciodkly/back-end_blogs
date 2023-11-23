const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');




const FieldSchema1 = new mongoose.Schema({
    
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: false },
});
// {
//     timestamps: true,
// });

mongoose.plugin(slug);


module.exports = mongoose.model("collection4",FieldSchema1)

