const { Router } = require('express');

const {authHandler} = require('../handlers/authHandler')


const router = Router();

router.post('/', authHandler)










module.exports = router;