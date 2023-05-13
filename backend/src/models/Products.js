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
        type: Number,
        require: true
    },
    origin: {
        type: String,
    },
    image: {
        type: String
    }
})

module.exports = model('product', productSchema)