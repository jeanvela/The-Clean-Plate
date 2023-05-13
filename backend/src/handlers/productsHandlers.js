const {createProduct, getProductById, getAllProducts, getProductByName} = require('../controllers/productsControllers')
const Category = require('../models/Category')
const {uploadImage} = require('../cloudinary');
const  fs  = require('fs-extra');

const createProductsHandler = async(req, res) => {


    const {name, price, category, description, stock, origin} = req.body;

    try{
        const image = await uploadImage(req.file.path)
        console.log(req.file)
        console.log(image)
        const newProduct = await createProduct(name, price, category, description, stock, origin, image.url)

        await fs.unlink(req.file.path)

        for (const categoryName of category) {
            let categories = await Category.findOne({ name: categoryName });
            
            if (categories) {
              newProduct.category.push(categories.id);
            }
          }
      
          await newProduct.save();


        res.status(201).json(newProduct)

    }catch(error){

        res.status(400).json({error: error.message})

    }


}


const getProductsByIdHandler = async(req, res) => {

    const {idProduct} = req.params


    try{

        const product = await getProductById(idProduct)
        res.status(200).json(product)

    }catch(error){

        res.status(400).json({error: error.message})

    }   
}



const getProductsHandler = async(req, res) => {

        const {name} = req.query
        try{
            const products = await getAllProducts();
    
        if(name) {
            const product = products.filter(el => el.name.toLowerCase().includes(name.toLowerCase()));
            product.length ? res.status(200).json(product) : res.status(400).json({'message' : 'Ups, product Not Found, try again'})
        } else {

            res.status(200).json(products)
        }
    
    
        }catch(error){
    
            res.status(400).json({error: error.message})
        }
 
}



module.exports = {
    createProductsHandler,
    getProductsByIdHandler,
    getProductsHandler,
}