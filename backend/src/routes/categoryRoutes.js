const { Router } = require('express');
const {getCategoriesHandler} = require('../handlers/categoryHandler')

const router = Router();



router.get('/', getCategoriesHandler)






module.exports = router;