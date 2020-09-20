const Product = require('../models/product')
const formdable = require("formdable")
const _ = require("lodash")
const {errorHandler} = require("../helpers/dbErrorHandler")

exports.create = (req,res)=>{
    let form = new formidable.IncomingForm()
}