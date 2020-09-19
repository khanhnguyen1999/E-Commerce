const User = require("../models/user")
const jwt = require("jsonwebtoken").verify('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.TCYt5XsITJX1CxPCT8yAV-TVkIEq_PbChOMqsLfRoPsnsgw5WEuts01mq-pQy7UJiN5mgRxD-WUcX16dUEMGlv50aqzpqh4Qktb3rk-BuQy72IFLOqV0G_zS245-kronKb78cPN25DGlcTwLtjPAYuNzVBAh4vGHSrQyHUdBBPM', `a`) // to generate signed token
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
        if(!user.authenticate(password)){
            return res.status(401).json({
                error:'Email and password dont match'
            })
        }
        // generate a signed token with user id and secret 
        const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
        //persist the token as 't' in cookie with expiry date
        res.cookie('t',token,{expire:new Date()+9999})
        //return response with user and token to frontend client 
        const {_id,name,email,role}=user
        return res.json({token,user:{_id,email,name,role}})
    })
}
exports.signout = (req,res)=>{
    console.log(req)
    res.clearCookie('t')
    res.json({message:'SignOut success'})
}

exports.requireSignIn = expressJwt({
    secret:process.env.JWT_SECRET,
    userProperty:"auth",
    algorithms: ['RS256']
})