const express = require('express');
const cors = require('cors');
const products = require('./data/products');
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
app.listen(8080, () => {
    console.log('Server at http://localhost:8080');
});