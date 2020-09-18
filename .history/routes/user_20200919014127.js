const express = require("express")
const router = express.Router()

const {sayHi} = require("../controllers/user")

router.get('/',(req,res)=>{
    res.send("hello user")
})

module.exports = router