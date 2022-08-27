const express = require('express');
const salesController = require('../controllers/salesController');

const salesRoutes = express.Router();

salesRoutes.get('/', salesController.getAllSales);
// salesRoutes.get('/:id',);

module.exports = salesRoutes;
