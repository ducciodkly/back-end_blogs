const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// mongodb user model
const User = require('./../models/User')

// login

router.post('/login',(req,res)=>{
    let {email,password} = req.body
    email = email.trim()
    password = password.trim()

    if (email == "" || password == ""){
        res.json({
            statur:"FAILED",
            message:"Empty credentials supplied"
          })
    }
    else{
        User.find({email}).then(data => {
            if (data.length) {
                const hashedPassword = data[0].password
                bcrypt.compare(password,hashedPassword).then(result => {
                    if (result){
                        res.json({
                            statur:"SUCCESS",
                            message:"Login successful",
                            data: data,
                          }) 
                    }
                    else{
                        res.json({
                            statur:"FAILED",
                            message:"Invalid password entered"
                          }) 
                    }
                })
                .catch(err => {
                    res.json({
                        statur:"FAILED",
                        message:"An error occurred while checking for existing user"
                      }) 
                })
            }
        })
    }
})


// register
router.post('/register',(req,res)=>{
    let {firstname,lastname,email,password,repeatpassword} = req.body
    firstname = firstname.trim()
    lastname = lastname.trim()
    email = email.trim()
    password = password.trim()
    repeatpassword = repeatpassword.trim()

    if (firstname == ""|| lastname == "" || email == "" || password == "" || repeatpassword == ""){
          res.json({
            statur:"FAILED",
            message:"Empty input fields"
          }) 
    }
    else if (!/^[a-zA-Z ]*$/.test(firstname)){
        res.json({
            statur:"FAILED",
            message:"Invalid name entered"
          }) 
    }
    else if (!/^[a-zA-Z ]*$/.test(lastname)){
        res.json({
            statur:"FAILED",
            message:"Invalid name entered"
          }) 
    }
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            statur:"FAILED",
            message:"Invalid email entered"
          }) 
    }
    else if (password.length < 8)
    {
        res.json({
            statur:"FAILED",
            message:"Password is too short!"
          }) 

    }
    else if (repeatpassword.length < 8 && repeatpassword != password)
    {
        res.json({
            statur:"FAILED",
            message:"Password is too short!"
          }) 
    }
    else{
        // Checking if user already exits
        User.find({email}).then(result =>{
            if (result.length){
                res.json({
                    statur:"FAILED",
                    message:"User with the provided email already exits"
                  }) 
            }
            else{
                // Password handling
                const saltRound = 10
                bcrypt.hash(password,saltRound).then(hashedPassword => {
                    const newUser = new User({
                        firstname,
                        lastname,
                        email,
                        password: hashedPassword,
                        repeatpassword,
                    })

                    newUser.save().then(result  => {
                        res.json({
                            statur:"SUCCESS",
                            message:"Register successful",
                            data: result,
                          }) 
                    })
                    .catch(err => {
                        res.json({
                            statur:"FAILED",
                            message:"An error occurred while saving user account!"
                          })
                    })


                }).catch(err => {
                    res.json({
                        statur:"FAILED",
                        message:"An error occurred while hashing password!"
                      })
                })

            }
            
        }).catch(err =>{
            console.log(err)
            res.json({
                statur:"FAILED",
                message:"An error occurred while checking for existing user!"
              }) 
        })
    }
})


module.exports = router;