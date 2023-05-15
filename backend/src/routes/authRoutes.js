const { Router } = require('express')
const { createUserHandler, signin} = require('../handlers/authHandler')

const router = Router()

router.post('/',createUserHandler)
router.post('/', signin)