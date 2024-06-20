const productModel =require('../models/productModel');

exports.getAllProducts = async(req, res) =>{
    let products = await productModel.find();
    res.json(products);
}
exports.createProduct = async (req, res) =>{
    const product = new productModel({
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        category:req.body.category
    });
    await product.save();
    res.send(product);
}

exports.getSpecificProduct = async(req, res) =>{
    let product = await productModel.findById(req.params.id);
    res.json(product);
}