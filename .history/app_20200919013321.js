const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

//app
const app = express()

//db
mongoose.connect(process.env.DATABASE)

//routes
app.get('/',(req,res)=>{
    res.send("check")
})

const port = process.env.PORT || 8000


app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})