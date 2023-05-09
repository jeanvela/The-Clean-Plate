const { Router } = require('express');
const {createProductsHandler, getProductsByIdHandler, getProductsHandler} = require('../handlers/productsHandlers')

const router = Router();

const validate = (req,res,next) => {

    const {name, price, category, description, stock} = req.body;

    if(!name || !price || !category || !description || !stock) return res.status(400).json({error: 'Missing data'})

     next();

 }

router.post('/', validate,  createProductsHandler)
router.get('/:idProduct', getProductsByIdHandler)
router.get('/', getProductsHandler)






module.exports = router;