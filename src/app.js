import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import productRoutes from './api/routes/products';
import orderRoutes from './api/routes/orders';

// Body parser for post data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// mongodb connect
mongoose.connect('mongodb://root:toor@node-rest-shop-shard-00-00-ox9qr.mongodb.net:27017,node-rest-shop-shard-00-01-ox9qr.mongodb.net:27017,node-rest-shop-shard-00-02-ox9qr.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin', {useMongoClient: true});

// Allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Default Route
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// Error Route
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

export default app;