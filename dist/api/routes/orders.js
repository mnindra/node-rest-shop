'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/', function (req, res) {
  res.status(200).json({
    message: 'Handling GET method of /orders'
  });
});

router.post('/', function (req, res) {
  var order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  res.status(200).json({
    message: 'order was created',
    order: order
  });
});

router.get('/:id', function (req, res) {
  res.status(200).json({
    message: 'You request orders of ID ' + req.params.id
  });
});

router.delete('/:id', function (req, res) {
  res.status(200).json({
    message: 'You deleted orders of ID ' + req.params.id
  });
});

exports.default = router;