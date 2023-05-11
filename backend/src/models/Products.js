const { Schema, model} = require('mongoose') 

const productSchema = new Schema({
    name : {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: Array,
        require: true
    },
    description: {
        type: String
    },
    stock: {
        type: Boolean,
        default: true
    },
    origin: {
        type: String,
        require: true
    },
  // image: {
    //     public_id: String,
    //     secure_url: String
    // }
})

module.exports = model('product', productSchema)