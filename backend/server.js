const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const cors = require('cors');
const products = require('./data/products');
//dotenv config
dotenv.config();
connectDB(); //connect to database
const app = express();



app.use(cors());    

app.get('/', (req, res) => {
    res.send('Server is ready. Welcome to the backend!');
});
app.get('/products' , (req,res) => {
    res.json(products);
});
app.get('/products/:id' , (req,res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});