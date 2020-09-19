const express = require("express")
const router = express.Router()
const {
    requireSignIn
} = require("../controllers/auth")
const {
    userById
} = require("../controllers/user")

router.get('/secret/:userId',requireSignIn,require('../'))

router.param('userId',userById)

module.exports = router