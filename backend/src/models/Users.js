const { Schema, model } = require('mongoose')

const userSchema = new Schema({
   
    username: {
        type: String, 
        require: true,
        unique: true
    },

    roles: {
        type: Array
    },
    enable: {
        type: Boolean
    }
})

module.exports = model('User', userSchema)