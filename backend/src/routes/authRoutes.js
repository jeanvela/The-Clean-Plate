const { Router } = require('express');
const {authHandler} = require('../handlers/authHandler')
const { getUser } = require('../handlers/authHandler')
const { enableUsers } = require('../handlers/authHandler')

const router = Router();

router.post('/', authHandler)
router.get('/',getUser)
router.patch('/:id', enableUsers)

module.exports = router;