const User = require("../models/user")

exports.signup = (req,res)=>{
    const user =  new User(req.body)
}