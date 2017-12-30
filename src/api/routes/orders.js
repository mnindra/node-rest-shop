import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET method of /orders'
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    message: 'Handling POST method of /orders'
  });
});

router.get('/:id', (req, res) => {
  res.status(200).json({
    message: `You request orders of ID ${req.params.id}`
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    message: `You deleted orders of ID ${req.params.id}`
  });
});

export default router;