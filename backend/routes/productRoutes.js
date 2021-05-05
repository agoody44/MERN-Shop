const express = require('express');
const router = express.Router();

const { getAllProducts, getProductsById} = require('../controller/productControllers');

// gets all products from db
// get /api/products
router.get('/', getAllProducts);

// get a product by id from db
// get /api/products/:id
router.get('/:id', getProductsById);

module.exports = router;