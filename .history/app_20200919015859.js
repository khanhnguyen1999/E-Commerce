const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
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

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())


//routes
app.use('/api',useRoutes)
app.get('/',(req,res)=>{
    res.send("check")
})

const port = process.env.PORT || 8000


app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})