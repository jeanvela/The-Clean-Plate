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
  
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }] // * guardo el id del rol
})



module.exports = model('User', userSchema)