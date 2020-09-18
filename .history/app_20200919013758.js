const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
//import router
const useRoutes = require("./routes/user")


//app
const app = express()

//db
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true
}).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log("Error ",err)
})

//routes
app.get('/',(req,res)=>{
    res.send("check")
})

const port = process.env.PORT || 8000


app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})