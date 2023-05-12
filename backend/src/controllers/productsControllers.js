
const Product = require('../models/Products')
// const {uploadImage} = require('../cloudinary')
// const fs = require('fs-extra')

const createProduct =  async (name, price, category, description, stock, origin, image) => {

    
    const newProduct = new Product({
        name,
        price,
        category,
        description,
        stock,
        origin,
        image
    })

    return await newProduct.save()

    // let result;
    // if (req.files && req.files.image) {
    //     result = await uploadImage(req.files.image.tempFilePath)
    // }

    // const newProduct = new Product({
    //     name,
    //     price,
    //     category,
    //     description,
    //     stock,
    //     origin,
    //     image: result.secure_url
    // })
    // console.log(newProduct)
    // console.log(result)
    // await fs.unlink(req.files.image.tempFilePath)
    // return await newProduct.save()

    // const result = await uploadImage(req.file.image.tempFilePath)

    // const newProduct = new Product({
    //     name,
    //     price,
    //     category,
    //     description,
    //     stock,
    //     origin,
    //     image: result.url
    // })

    // await fs.unlink(req.files.image.tempFilePath)
    // return await newProduct.save()
}


const getProductById = async (idProduct) => {
  const productById = await Product.findById(idProduct);

  return productById;
};

const getAllProducts = async () => {
  const allProducts = await Product.find();

  return allProducts;
};

const getProductByName = async (name) => {
  const productByName = await Product.find({
    name: {
      $regex: name,
    },
  });

  return productByName;
};

module.exports = {
  createProduct,
  getProductById,
  getAllProducts,
  getProductByName,
};
