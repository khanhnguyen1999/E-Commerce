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
}