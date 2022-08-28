const express = require('express');
const productsController = require('../controllers/productsController');
const { validateName, validateNameLength } = require('../middlewares/productsValidation');

const productsRoute = express.Router();

productsRoute.get('/', productsController.getAllProducts);
productsRoute.get('/:id', productsController.getProductById);
productsRoute.post('/', validateName, validateNameLength, productsController.registerNewProduct);
productsRoute.delete('/:id', productsController.deleteProduct);

module.exports = productsRoute;
