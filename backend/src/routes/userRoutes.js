const { Router } = require('express');
const {createUserHandler} = require('../handlers/userHandler')
const { verifyToken, isAdmin, checkRolesExisted} = require('../middlewares/index')


const router = Router();




router.post('/',[verifyToken, isAdmin, checkRolesExisted], (req, res) => {
    
})






module.exports = router;