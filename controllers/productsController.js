const productsService = require('../services/productsService');
const { statusMessages } = require('../helpers/messages/statusMessages');
const { errorMessages } = require('../helpers/messages/errorMessages');

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
      return response
        .status(statusMessages.NOT_FOUND)
        .json({ message: errorMessages.PRODUCT_NOT_FOUND });
    }

    return response
      .status(statusMessages.OK)
      .json(result);
};

const registerNewProduct = async (request, response) => {
    const { name } = request.body;
    const result = await productsService.registerNewProduct(name);

    return response
      .status(statusMessages.CREATED)
      .json(result);
};

module.exports = { getAllProducts, getProductById, registerNewProduct };
