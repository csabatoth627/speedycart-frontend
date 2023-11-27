import { log } from 'console';
import dotenv from 'dotenv';
dotenv.config();
import connectDb from './config/db.js';
import express from 'express';
import productRoutes from './routes/productRoutes.js'

connectDb();

const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.send('API is running....')
});

app.use('/api/products', productRoutes)

app.listen(port, () => console.log(`Server is running on port ${port}`))