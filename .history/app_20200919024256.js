const express = require("express")
const mongoose = require("mongoose")
const useRoutes = require("./routes/user")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
require("dotenv").config()
//import router


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
app.use(cookieParser())

//routes
app.use('/api',useRoutes)

const port = process.env.PORT || 8000


app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})