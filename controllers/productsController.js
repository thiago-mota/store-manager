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

const deleteProduct = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await productsService.deleteProduct(id);
    console.log(result);

    if (!result) {
      return response
        .status(statusMessages.NOT_FOUND)
        .json({ message: errorMessages.PRODUCT_NOT_FOUND });    
    }
    return response
      .status(204).json();
  } catch (error) {
    console.log(error);
    return response
      .status(statusMessages.SERVER_ERROR)
      .json(errorMessages.INTERNAL_SERVER_ERROR);
  }
};

// https://stackoverflow.com/questions/68997083/get-data-of-affected-rows-after-mysql-table-update
// if no rows were affected its because its ID doesnt exist.

const searchProduct = async (request, response) => {
  const { q } = request.query;
  const result = await productsService.searchProduct(q);

  return response
    .status(statusMessages.OK)
    .json(result);
};

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
  deleteProduct,
  searchProduct,
};
