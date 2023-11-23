const datatables = require('../models/user');


class loginController{

    //[POST] /login/check
    async check(req,res,next){
        try{
            const check = await collection.findOne({email:req.body.email})
    
            if(check.password === req.body.password){
                res.render("home")
            }
            else{
                res.send("wrong password")
            }
        }
        catch{}

    }
}


module.exports = new loginController();
