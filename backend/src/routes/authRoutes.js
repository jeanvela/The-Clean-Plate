const { Router } = require('express')
const {signinHandler, singupHandler} = require('../handlers/authHandler')
const {checkDuplicatedUsernameOrEmail, checkRolesExisted} = require('../middlewares/index')

const router = Router()

router.post('/singup',[checkDuplicatedUsernameOrEmail, checkRolesExisted], singupHandler)
router.post('/singin', signinHandler)

module.exports = router