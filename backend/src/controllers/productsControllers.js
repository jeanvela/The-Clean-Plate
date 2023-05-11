const Product = require('../models/Products')
const {uploadImage} = require('../cloudinary')
const fs = require('fs-extra')

const createProduct =  async (name, price, category, description, stock ,req) => {
    
    const newProduct = new Product({
      name,
      price,
      category,
      description,
      stock
    });
    console.log(req.files)
    if(req.files?.image) {
        const result = await uploadImage(req.files.image.tempFilePath)
        console.log(result)
        // Product.image = {
        //     public_id: result.public_id,
        //     secure_url: result.secure_url
        // }
        await fs.unlink(req.files.image.tempFilePath)
    }

    return await newProduct.save();

}


const getProductById = async (idProduct) => {

    const productById = await Product.findById(idProduct);

    return productById;

}


const getAllProducts = async () => {
    
    const allProducts = await Product.find();

    return allProducts;

}


const getProductByName = async (name) => {

    const productByName = await Product.find({
        name: {
            $regex: name
        }
    });

    return productByName;

}


module.exports = {
    createProduct,
    getProductById,
    getAllProducts,
    getProductByName,
}