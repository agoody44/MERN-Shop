require('dotenv').config();

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

connectDB();

// function that imports the data
const importData = async () => {
    try{
        await Product.deleteMany({});

        await Product.insertMany(productsData);
        
        console.log('Data Import Success');

        process.exit();

    }catch (error) {
        console.log('Data Import Failed')
        process.exit(1);
    }
};

importData();