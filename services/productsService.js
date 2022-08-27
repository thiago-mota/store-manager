const productsModel = require('../models/productsModel');

const getAllProducts = async () => productsModel.getAllProducts();
const getProductById = async (id) => productsModel.getProductById(id);
const registerNewProduct = async (name) => productsModel.registerNewProduct(name);

module.exports = { getAllProducts, getProductById, registerNewProduct };
