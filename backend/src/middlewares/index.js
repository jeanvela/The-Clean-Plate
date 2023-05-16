const User = require("../models/Users");
const Role = require('../models/Roles');
const ROLES = ["user", "admin"]

const verifyToken = async (req, res, next) => {
    try {
      const token = req.headers['x-access-token']
      if (!token) return res.status(404).json({message: 'No token provided'})
      const decoded = jwt.verify(token, 'api/sign')
      req.userId = decoded.id
      const user = await User.findById(req.userId, {password: 0})
      if (!user) return res.status(404).json({message: 'no user found'})
      next()
    } catch (error) {
      res.status(400).json({message: 'Unauthorized'})
    }
    
}

const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
            next()
            return
        }
    }
    return res.status(404).json({message: 'Require Admin role'})
}


const checkRolesExisted = (req, res, next) => {
    if(req.body.roles){
        for( let  i = 0 ; i < req.body.roles.length ; i++ ){

            if(!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    message: "Role does not exist"
                })

            }

        }
    }

    next()
}

const checkDuplicatedUsernameOrEmail = async(req, res, next) => {

    
   const user = await User.findOne({username: req.body.username})
   if(user){

    res.status(400).json({message: "The user already exist"})

   }

   const email = await User.findOne({email: req.body.email})
   if(email){

    res.status(400).json({message: "The email already exist"})

   }

   next()

}

module.exports = {
    verifyToken,
    isAdmin,
    checkRolesExisted,
    checkDuplicatedUsernameOrEmail
}