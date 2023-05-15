const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String, 
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }] // * guardo el id del rol
})

// ! cifrar las contraseñas
userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password, salt)
}

// ! comparar la contraseña
userSchema.statics.comparePassword = async (password, recivedPassword) => {
    return await bcrypt.compare(password, recivedPassword)
}

module.exports = model('User', userSchema)