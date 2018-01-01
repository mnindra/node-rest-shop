import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import Product from '../models/product';

// GET ALL DATA
router.get('/', (req, res) => {
  Product.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// CREATE NEW DATA
router.post('/', (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product.save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'product was created',
        createdProduct: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// GET SPESIFIC DATA BY ID
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Product.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      if(doc)
        res.status(200).json(doc);
      else
        res.status(404).json({message: 'No valid entry for provided ID'});
    })
    .catch(err => {
      console.log(err);
      res.status(200).json({error: err});
    });
});

// UPDATE DATA
router.patch('/:id', (req, res) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Product.update({_id: id}, {$set: updateOps})
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

// DELETE DATA
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Product.remove({_id: id})
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

export default router;