const { Router } = require('express');
const {getCategoriesHandler, createCategoriesHandler} = require('../handlers/categoryHandler')
const { verifyToken, isAdmin} = require('../middlewares/index')

const router = Router();



router.get('/', getCategoriesHandler)
router.post('/', [verifyToken, isAdmin], createCategoriesHandler)






module.exports = router;