const User = require('../models/Users')
const jwt = require('jsonwebtoken')
const Role = require('../models/Roles')

const createUser = async (username, email , password , roles) => {

    // const newUser = new User({
    //     username,
    //     email,
    //     password: await User.encryptPasswors(password)
    // })

    // // ! si el usuario ah ingresado un rol quiero el id de ese rol
    // if (roles) {
    //     const founRoles = await Role.find({name: {$in: roles}})
    //     newUser.roles = founRoles.map(role => role._id)
    // } else {
    //     // ! en caso contrario que tenga el rol (user)
    //     const role = await Role.find({name: 'user'})
    //     newUser.roles = [role._id]
    // }

    // const saveUser = await newUser.save()
    // const token = jwt.sign({id: saveUser._id}, 'user/api', {
    //     expiresIn: 86400 // * que expire en un dia 
    // })
    // return token //res.status(200).json({token})
}

const signinController = async (email, password) => {
    // const userFound = await User.findOne({email: email}).populate('roles')
    // if (!userFound) throw Error('User not found')
    // const matchPassword = await User.comparePassword(password)
    // if (!matchPassword) throw Error('Invalid password')
    // const token = jwt.sign({id: userFound._id}, 'user/api', {
    //     expiresIn: 86400
    // })
    // return token
}



module.exports = {
    createUser,
    signinController
}