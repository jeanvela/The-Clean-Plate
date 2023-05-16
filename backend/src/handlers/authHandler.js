const { createUser } = require('../controllers/authControllers')

const singupHandler = async (req, res) => {
    const {username, email, password, roles} = req.body
    try {
        const newUser = new User({
            username,
            email,
            password: await User.encryptPasswors(password)
        })
    
        // ! si el usuario ah ingresado un rol quiero el id de ese rol
        if (roles) {
            const founRoles = await Role.find({name: {$in: roles}})
            newUser.roles = founRoles.map(role => role._id)
        } else {
            // ! en caso contrario que tenga el rol (user)
            const role = await Role.find({name: 'user'})
            newUser.roles = [role._id]
        }
    
        const saveUser = await newUser.save()
        const token = jwt.sign({id: saveUser._id}, 'user/api', {
            expiresIn: 86400 // * que expire en un dia 
        })
       res.status(200).json({token})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const signinHandler = async (req, res) => {
    const {email, password} = req.body

    const userFound = await User.findOne({email: email}).populate('roles')
    if (!userFound) return res.status(400).json({message: 'User not found'})
    const matchPassword = await User.comparePassword(password, userFound.password)
    if(!matchPassword){
        res.status(401).json({token:null, message: 'Invalid password'})
    }

    const token = jwt.sign({id: userFound._id}, 'user/api', {
        expiresIn: 86400
    })

    res.json({token})
 
}

module.exports = {
    singupHandler,
    signinHandler
}