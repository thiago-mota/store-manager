const productsModel = require('../models/productsModel');

const getAllProducts = async () => productsModel.getAllProducts();
const getProductById = async (id) => productsModel.getProductById(id);
const registerNewProduct = async (name) => productsModel.registerNewProduct(name);
const deleteProduct = async (id) => productsModel.deleteProduct(id);

const searchProduct = async (name) => productsModel.searchProduct(name);
const updateProduct = async ({ name, id }) => {
  const result = await productsModel.updateProduct({ name, id });

  if (result.affectedRows === 0) return false;
  return true;
};

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
  deleteProduct,
  searchProduct,
  updateProduct,
};
