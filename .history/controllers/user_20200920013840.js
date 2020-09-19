const User = require("../models/user")
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