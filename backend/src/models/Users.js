const { Schema, model } = require('mongoose')

const userSchema = new Schema({
   
    email: {
        type: String, 
        require: true,
        unique: true
    },

    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
  
})

module.exports = model('User', userSchema)