const express = require('express');
const salesController = require('../controllers/salesController');

const salesRoutes = express.Router();

salesRoutes.get('/', salesController.getAllSales);
salesRoutes.get('/:id', salesController.getSalesById);
salesRoutes.delete('/:id', salesController.deleteSale);

module.exports = salesRoutes;
