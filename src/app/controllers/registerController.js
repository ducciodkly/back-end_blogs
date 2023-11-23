const datatables = require('../models/user');


class registerController{


    // [POST] /register/check
    async check (req,res,next){
        const data = {
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password,
            repeatpassword:req.body.repeatpassword
        }
        await  collection.insertMany([data])
        res.render("login")
    }
}


module.exports = new registerController();
