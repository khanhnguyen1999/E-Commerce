const express = require("express")
const router = express.Router()

const {
    create
} = require("../controllers/category")


router.post('/signup',userSignupValidator,signup)
router.post('/signin',signin) 
router.get('/signout',signout)

router.get('hello',)

module.exports = router