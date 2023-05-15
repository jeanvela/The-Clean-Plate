const { Router } = require('express');


const productsRoutes = require('./productsRoutes')
const categoryRoutes = require('./categoryRoutes')
const authRoutes = require('./authRoutes')



const router = Router();


router.use('/products', productsRoutes)
router.use('/category', categoryRoutes)
router.use('/signup', authRoutes)
router.use('/signin', authRoutes)

module.exports = router;