const productsService = require('../services/productsService');
const { statusMessages } = require('../helpers/messages/statusMessages');

const getAllProducts = async (_request, response) => {
  const result = await productsService.getAllProducts();

  response
    .status(statusMessages.OK)
    .json(result);
};

const getProductById = async (_request, response) => {
  const result = await productsService.getProductById();

  response
    .status(statusMessages.OK)
    .json(result);
};

module.exports = { getAllProducts, getProductById };
