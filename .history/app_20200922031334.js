const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const expressValidator = require("express-validator")
const cors = requrire("cors")
require("dotenv").config()
const app = express()


//import router
const authRoutes = require("./routes/auth")
const useRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")


//app

//db
mongoose.connect(process.env.DATABASE,{
    useCreateIndex: true,
    useNewUrlParser: true
}).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log("Error ",err)
})

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use(cors())

//routes
app.use('/api',authRoutes)
app.use('/api',useRoutes)
app.use('/api',categoryRoutes)
app.use('/api',productRoutes)

const port = process.env.PORT || 8000


app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})