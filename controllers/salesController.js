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
    response
      .status(statusMessages.NOT_FOUND)
      .json({ message: errorMessages.SALE_NOT_FOUND });
  }
};

module.exports = { getAllSales };
