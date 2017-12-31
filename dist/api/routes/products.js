'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// GET ALL DATA
router.get('/', function (req, res) {
  res.status(200).json({
    message: 'Handling GET method of /products'
  });
});

// CREATE NEW DATA
router.post('/', function (req, res) {
  var product = {
    name: req.body.name,
    price: req.body.price
  };
  res.status(200).json({
    message: 'product was created',
    createdProduct: product
  });
});

// GET SPESIFIC DATA BY ID
router.get('/:id', function (req, res) {
  res.status(200).json({
    message: 'You request product of ID ' + req.params.id
  });
});

// UPDATE DATA
router.patch('/:id', function (req, res) {
  res.status(200).json({
    message: 'You updated product of ID ' + req.params.id
  });
});

// DELETE DATA
router.delete('/:id', function (req, res) {
  res.status(200).json({
    message: 'You deleted product of ID ' + req.params.id
  });
});

exports.default = router;