const Product = require('../models/product')
const {errorHandler} = require("../helpers/dbErrorHandler")

exports.create = (req,res)=>{
    const product = new Product(req.body)
    product.save((err,data)=>{
        if(err){
            return res.status(400).json({
                error:errorHandler(err)
            })
        }
        res.json({data})
    })
}