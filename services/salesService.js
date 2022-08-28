const salesModel = require('../models/salesModel');

const getAllSales = async () => salesModel.getAllSales();
const getSaleById = async (id) => salesModel.getSaleById(id);
const deleteSale = async (id) => salesModel.deleteSale(id);

module.exports = { getAllSales, getSaleById };
