const productsModel = require('../models/productsModel');

const getAllProducts = async () => productsModel.getAllProducts();
const getProductById = async () => productsModel.getProductById();

module.exports = { getAllProducts, getProductById };
