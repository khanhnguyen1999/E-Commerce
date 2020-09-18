const express = require("express")
require("dotenv").config()

const app = express()

app.get('/',(req,res)=>{
    res.send("check")
})

const port = process.env.PORT || 3000