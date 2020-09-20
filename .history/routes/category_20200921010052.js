const express = require("express")
const router = express.Router()

const {create} = require("../controllers/category")
const {requireSignIn,isAuth,isAdmin} = require("../controllers/auth")


router.post('/category/create',requireSignIn,isAuth,isAdmin,create)



module.exports = router