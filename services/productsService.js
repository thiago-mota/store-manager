const productsModel = require('../models/productsModel');

const getAllProducts = async () => productsModel.getAllProducts();
const getProductById = async (id) => productsModel.getProductById(id);
// const registerNewProduct = async (name) => {
//   const rows = await productsModel.registerNewProduct(name);
//   const result = {
//     id: rows.insertId,
//     name,
//   };

//   return result;
// };

const registerNewProduct = async (name) => productsModel.registerNewProduct(name);

module.exports = { getAllProducts, getProductById, registerNewProduct };
