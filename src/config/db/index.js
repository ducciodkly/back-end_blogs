const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/LoginBEAdmin');
        console.log('Connect Successfully');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
