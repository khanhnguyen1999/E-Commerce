const Product = require('../models/product')
const formidable = require("formidable")
const _ = require("lodash")
const {errorHandler} = require("../helpers/dbErrorHandler")

exports.create = (req,res)=>{
    let form = new formidable.IncomingForm()
}