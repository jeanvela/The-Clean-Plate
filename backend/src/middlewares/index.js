const User = require("../models/Users");
const Role = require('../models/roles')

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

const isModerator = async (req, res, next) => {
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

module.exports = {
    verifyToken,
    isModerator
}