const ProductModel = require('../models/productModel');

const createProduct = async function (req,res){
    let data = req.body
    let saveData = await ProductModel.create(data)
    res.send({msg: saveData})
}

module.exports.createProduct = createProduct;