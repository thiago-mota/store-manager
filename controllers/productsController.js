const productsService = require('../services/productsService');
const { statusMessages } = require('../helpers/messages/statusMessages');

const getAllProducts = async (request, response) => {
  const result = await productsService.getAllProducts();

  response
    .status(statusMessages.OK)
    .json(result);
};

module.exports = { getAllProducts };
