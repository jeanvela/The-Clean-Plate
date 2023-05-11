const { Router } = require('express');


const productsRoutes = require('./productsRoutes')
const categoryRoutes = require('./categoryRoutes')



const router = Router();


router.use('/products', productsRoutes)
router.use('/category', categoryRoutes)

module.exports = router;