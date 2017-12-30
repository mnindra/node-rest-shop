'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _products = require('./api/routes/products');

var _products2 = _interopRequireDefault(_products);

var _orders = require('./api/routes/orders');

var _orders2 = _interopRequireDefault(_orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();


app.use('/products', _products2.default);
app.use('/orders', _orders2.default);

exports.default = app;