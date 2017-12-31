import express from 'express';
const router = express.Router();

// GET ALL DATA
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET method of /products'
  });
});

// CREATE NEW DATA
router.post('/', (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(200).json({
    message: 'product was created',
    createdProduct: product
  });
});

// GET SPESIFIC DATA BY ID
router.get('/:id', (req, res) => {
  res.status(200).json({
    message: `You request product of ID ${req.params.id}`
  });
});

// UPDATE DATA
router.patch('/:id', (req, res) => {
  res.status(200).json({
    message: `You updated product of ID ${req.params.id}`
  });
});

// DELETE DATA
router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: `You deleted product of ID ${req.params.id}`
  });
});

export default router;