const productsService = require('../services/productsService');
const { statusMessages } = require('../helpers/messages/statusMessages');

const getAllProducts = async (_request, response) => {
  const result = await productsService.getAllProducts();

  return response
    .status(statusMessages.OK)
    .json(result);
};

const getProductById = async (request, response) => {
  const { id } = request.params;
  const result = await productsService.getProductById(id);

  if (!result) {
    return response.status(404).json({ message: 'Product not found' });
  }

  return response
    .status(statusMessages.OK)
    .json(result);
};

module.exports = { getAllProducts, getProductById };
