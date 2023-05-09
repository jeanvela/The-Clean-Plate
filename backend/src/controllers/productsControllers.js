const Product = require('../models/Products')

const createProduct =  async (id, name, amount, category, image, price, description, stock, categoryId) => {
    
    const newProduct = new Product({
        id,
        name,
        amount, 
        category,
        image, 
        price,
        description,
        stock,
        categoryId
    });

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