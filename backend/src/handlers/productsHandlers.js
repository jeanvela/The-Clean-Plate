const {createProduct, getProductById, getAllProducts, getProductByName} = require('../controllers/productsControllers')


const createProductsHandler = async(req, res) => {


    const {id, name, amount, category, image, price, description, stock} = req.body;

    try{

        const newProduct = await createProduct(id, name, amount, category, image, price, description, stock, categoryId)

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
    
        const products = name? await getProductByName(name) : await getAllProducts()
    
        res.status(200).json(products)
    
        }catch(error){
    
            res.status(400).json({error: error.message})
        }
 
}



module.exports = {
    createProductsHandler,
    getProductsByIdHandler,
    getProductsHandler,
}