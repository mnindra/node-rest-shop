'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _products = require('./api/routes/products');

var _products2 = _interopRequireDefault(_products);

var _orders = require('./api/routes/orders');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();


// Body parser for post data
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

// mongodb connect
_mongoose2.default.connect('mongodb://root:toor@node-rest-shop-shard-00-00-ox9qr.mongodb.net:27017,node-rest-shop-shard-00-01-ox9qr.mongodb.net:27017,node-rest-shop-shard-00-02-ox9qr.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin', { useMongoClient: true });

// Allow CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Default Route
app.use('/products', _products2.default);
app.use('/orders', _orders2.default);

// Error Route
app.use(function (req, res, next) {
  var error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

exports.default = app;