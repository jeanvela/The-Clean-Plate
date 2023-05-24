const { Router } = require('express');
const {authHandler} = require('../handlers/authHandler')
const { getUser } = require('../handlers/authHandler')

const router = Router();

router.post('/', authHandler)
router.get('/',getUser)

module.exports = router;