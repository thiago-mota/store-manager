const salesService = require('../services/salesService');
const { statusMessages } = require('../helpers/messages/statusMessages');
const { errorMessages } = require('../helpers/messages/errorMessages');

const getAllSales = async (_request, response) => {
  try {
    const result = await salesService.getAllSales();

    return response
      .status(statusMessages.OK)
      .json(result);
  } catch (error) {
    return response
      .status(statusMessages.SERVER_ERROR)
      .json({ message: errorMessages.INTERNAL_SERVER_ERROR });
  }
};

const getSalesById = async (request, response) => {
  try {
    const { id } = request.params;
    const result = await salesService.getSaleById(id);

    if (!result) {
      return response
        .status(statusMessages.NOT_FOUND)
        .json({ message: errorMessages.SALE_NOT_FOUND });
    }

    return response
      .status(statusMessages.OK)
      .json(result);
  } catch (error) {
    return response
      .status(statusMessages.NOT_FOUND)
      .json({ message: errorMessages.SALE_NOT_FOUND });
  }
};

module.exports = { getAllSales, getSalesById };
