const { createUser } = require('../controllers/authControllers')

const createUserHandler = async (req, res) => {
    const {username, email, password, roles} = req.body
    try {
        const newUser = await createUser(username, email, password, roles)
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const signin = async (req, res) => {
    const {email, password} = req.body
}

module.exports = {
    createUserHandler,
    signin
}