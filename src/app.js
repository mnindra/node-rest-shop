import express from 'express';
const app = express();
import productRoutes from './api/routes/products';
import orderRoutes from './api/routes/orders';

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