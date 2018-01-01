'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _product = require('../models/product');

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


// GET ALL DATA
router.get('/', function (req, res) {
  _product2.default.find().exec().then(function (docs) {
    console.log(docs);
    res.status(200).json(docs);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

// CREATE NEW DATA
router.post('/', function (req, res) {
  var product = new _product2.default({
    _id: new _mongoose2.default.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product.save().then(function (result) {
    console.log(result);
    res.status(200).json({
      message: 'product was created',
      createdProduct: result
    });
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

// GET SPESIFIC DATA BY ID
router.get('/:id', function (req, res) {
  var id = req.params.id;
  _product2.default.findById(id).exec().then(function (doc) {
    console.log(doc);
    if (doc) res.status(200).json(doc);else res.status(404).json({ message: 'No valid entry for provided ID' });
  }).catch(function (err) {
    console.log(err);
    res.status(200).json({ error: err });
  });
});

// UPDATE DATA
router.patch('/:id', function (req, res) {
  var id = req.params.id;
  var updateOps = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = req.body[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ops = _step.value;

      updateOps[ops.propName] = ops.value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  _product2.default.update({ _id: id }, { $set: updateOps }).exec().then(function (result) {
    console.log(result);
    res.status(200).json(result);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

// DELETE DATA
router.delete('/:id', function (req, res) {
  var id = req.params.id;
  _product2.default.remove({ _id: id }).exec().then(function (result) {
    console.log(result);
    res.status(200).json(result);
  }).catch(function (err) {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

exports.default = router;