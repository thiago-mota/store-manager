const productsService = require('../services/productsService');
const { statusMessages } = require('../helpers/messages/statusMessages');
const { errorMessages } = require('../helpers/messages/errorMessages');

const getAllProducts = async (_request, response) => {
  try {
    const result = await productsService.getAllProducts();

    return response
      .status(statusMessages.OK)
      .json(result);
  } catch (error) {
    return response
      .status(statusMessages.SERVER_ERROR)
      .json({ message: errorMessages.INTERNAL_SERVER_ERROR });
  }
};

const getProductById = async (request, response) => {
  try {
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
  } catch (error) {
    return response
      .status(statusMessages.SERVER_ERROR)
      .json({ message: errorMessages.INTERNAL_SERVER_ERROR });
  }
};

const registerNewProduct = async (request, response) => {
  // try {
    const { name } = request.body;
    const result = await productsService.registerNewProduct(name);

    return response
      .status(statusMessages.CREATED)
      .json(result);
  // } catch (error) {
  //   return response
  //     .status(statusMessages.SERVER_ERROR)
  //     .json({ message: errorMessages.INTERNAL_SERVER_ERROR });
  // }
};

module.exports = { getAllProducts, getProductById, registerNewProduct };
