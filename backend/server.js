const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const cors = require('cors');
const products = require('./data/products');
const productRoutes = require('./routes/productsRoute');
//dotenv config
dotenv.config();
connectDB(); //connect to database
const app = express();



app.use(cors());    

app.get('/', (req, res) => {
    res.send('Server is ready. Welcome to the backend!');
});

//Using the productRoutes
app.use('/api', productRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});