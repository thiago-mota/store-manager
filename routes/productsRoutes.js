const express = require('express');
const productsController = require('../controllers/productsController');

const productsRoute = express.Router();

productsRoute.get('/products', productsController.getAllProducts);

module.exports = productsRoute;
