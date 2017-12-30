import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET method of /products'
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    message: 'Handling POST method of /products'
  });
});

router.get('/:id', (req, res) => {
  res.status(200).json({
    message: `You request product of ID ${req.params.id}`
  });
});

router.patch('/:id', (req, res) => {
  res.status(200).json({
    message: `You updated product of ID ${req.params.id}`
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: `You deleted product of ID ${req.params.id}`
  });
});

export default router;