const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const getAll = await productsModel.getAllProducts();
  return getAll;
};

const getProductById = async (id) => {
  const getById = await productsModel.getProductById(id);
  return getById;
};

const registerNewProduct = async (name) => productsModel.registerNewProduct(name);
const deleteProduct = async (id) => { 
  const result = await productsModel.deleteProduct(id);

  if (result.affectedRows === 0) return false;
  return true;
};

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
