const productsModel = require('../models/productsModel');

const getAllProducts = async () => productsModel.getAllProducts();
const getProductById = async (id) => productsModel.getProductById(id);
const registerNewProduct = async (name) => productsModel.registerNewProduct(name);
const deleteProduct = async (id) => {
  const result = await productsModel.deleteProduct(id);
  if (result.affectedRows === 0) {
    return false;
  } return true;
};

const searchProduct = async (name) => productsModel.searchProduct(name);

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
  deleteProduct,
  searchProduct,
};
