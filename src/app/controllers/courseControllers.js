const Course = require('../models/user');
const { mongooseToObject } = require('../../util/moongoose');

class courseController{

    show(req,res,next) {
        res.render('layout/home')
    }



}

module.exports = new courseController();