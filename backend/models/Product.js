const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // description field
    description: {
        type: String,
        required: true,
    },
    // price field
    price: {
        type: Number,
        required: true,
    },
    // stock field tells you how many items are instock
    countInStock: {
        type: Number,
        required: true,
    },
    // image of product
    imageUrl: {
        type: String,
        required: true,
    }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;