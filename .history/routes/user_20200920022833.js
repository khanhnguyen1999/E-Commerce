const express = require("express")
const router = express.Router()
const {
    signup,
    signin,
    signout,
    requireSignIn
} = require("../controllers/auth")
const {
    userById
} = require("../controllers/user")

router.get('/secret/:userId',require('../'))

router.param('userId',userById)

module.exports = router