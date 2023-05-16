const { Router } = require('express');


const productsRoutes = require('./productsRoutes')
const categoryRoutes = require('./categoryRoutes')
const authRoutes = require('./authRoutes')
const userRoutes = require ('./userRoutes')




const router = Router();


router.use('/products', productsRoutes)
router.use('/category', categoryRoutes)
router.use('/auth', authRoutes)
router.use('/users', userRoutes )


module.exports = router;