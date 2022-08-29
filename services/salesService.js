const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const getSales = await salesModel.getAllSales();
  return getSales;
};
 
const getSaleById = async (id) => {
  const getById = await salesModel.getSaleById(id);
  return getById;
};
 
const deleteSale = async (id) => {
  const deleteS = await salesModel.deleteSale(id);
  return deleteS;
};
 
const addSale = async (sale) => {
  const add = await salesModel.addSale(sale);
  return add;
};

module.exports = { getAllSales, getSaleById, deleteSale, addSale };
