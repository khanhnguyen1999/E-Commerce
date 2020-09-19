const User = require("../models/user")
const jwt = require("jsonwebtoken") // to generate signed token
const expressJwt = require("express-jwt") // for authorization check
const {errorHandler} = require("../helpers/dbErrorHandler")

exports.signup = (req,res)=>{
    console.log("check ",req.body)
    const user =  new User(req.body)
    user.save((err,user)=>{
        console.log(err)
        if(err){
            return res.status(400).json({
                err:errorHandler(err)
            })
        }
        user.salt = undefined
        user.hashed_password = undefined
        res.json({
            user
        })
    })
}
exports.signin = (req,res)=>{
    // find the user based on email
    const {email,password} = req.body
    User.findOne({email},(err,user)=>{
        if(err||!user){
            return res.status(400).json({
                err:'User with that email does not exist.Please signup'
            })
        }
        // if user is found make sure the email and password match
        // create authenticate method in user model

        // generate a signed token with user id and secret 
        const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
        //persist the token as 't' in cookie with expiry date
        res.cookie('t',token,{expire:new Date()+9999})
    })
}