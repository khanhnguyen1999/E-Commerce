const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
require("dotenv").config()
const app = express()


//import router
const useRoutes = require("./routes/user")


//app

//db
mongoose.set('useCreateIndex', true)
mongoose.connect(config.dbUri, { useNewUrlParser: true })

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