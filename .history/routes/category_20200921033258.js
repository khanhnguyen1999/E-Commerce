const express = require("express")
const router = express.Router()

const {create,categoryById,read} = require("../controllers/category")
const {requireSignIn,isAuth,isAdmin} = require("../controllers/auth")
const {userById} = require("../controllers/user")

route.get("/category/:categoryId",read)
router.post('/category/create/:userId',requireSignIn,isAuth,isAdmin,create)

router.param('categoryId',categoryById)
router.param('userId',userById)
module.exports = router