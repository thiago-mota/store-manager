const productsModel = require('../models/productsModel');

const getAllProducts = async () => productsModel.getAllProducts();
const getProductById = async (id) => productsModel.getProductById(id);
const registerNewProduct = async (name) => productsModel.registerNewProduct(name);
const deleteProduct = async (id) => productsModel.deleteProduct(id);

module.exports = { getAllProducts, getProductById, registerNewProduct, deleteProduct };
