const express = require("express")
const router = express.Router()

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo,
    search
} = require("../controllers/product")
const {
    requireSignIn,
    isAuth,
    isAdmin
} = require("../controllers/auth")
const {userById} = require("../controllers/user")


router.get('/products',list)
router.get('/products/related/:productId',listRelated)
router.get('/products/categories',listCategories)
router.get('/product/photo/:productId',photo)
router.post("/products/by/search", listBySearch);
router.post("/product",search)


router.post('/product/create/:userId',requireSignIn,isAuth,isAdmin,create)
router.get('/product/:productId',read)
router.delete('/product/:productId/:userId',requireSignIn,isAuth,isAdmin,remove)
router.put('/product/:productId/:userId',requireSignIn,isAuth,isAdmin,update)

router.param('userId',userById)
router.param('productId',productById)

module.exports = router