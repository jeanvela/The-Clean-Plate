const { Router } = require('express');


const productsRoutes = require('./productsRoutes')
const categoryRoutes = require('./categoryRoutes')
const processPaymentRoutes = require('./processPaymentRoutes')



const router = Router();


router.use('/products', productsRoutes)
router.use('/category', categoryRoutes)
router.use('/payment', processPaymentRoutes)

module.exports = router;