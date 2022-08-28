const salesService = require('../services/salesService');
const { statusMessages } = require('../helpers/messages/statusMessages');
const { errorMessages } = require('../helpers/messages/errorMessages');

const getAllSales = async (_request, response) => {
    const result = await salesService.getAllSales();

    return response
      .status(statusMessages.OK)
      .json(result);
};

const getSalesById = async (request, response) => {
    const { id } = request.params;
    const result = await salesService.getSaleById(id);

    if (result.length === 0) {
      return response
        .status(statusMessages.NOT_FOUND)
        .json({ message: errorMessages.SALE_NOT_FOUND });
    }

    return response
      .status(statusMessages.OK)
      .json(result);
};

// const deleteSale = async (request, response) => {
//   try {
//     const { id } = request.params;
//     const result = await salesService.deleteSale(id);

//     if (result.affectedRows === 0) {
//       return response
//         .status(statusMessages.NOT_FOUND)
//         .json({ message: errorMessages.SALE_NOT_FOUND });
//     }

//     return response
//       .status(204).json();
//   } catch (error) {
//     return response
//       .status(statusMessages.SERVER_ERROR)
//       .json(errorMessages.INTERNAL_SERVER_ERROR);
//   } 
// };

const deleteSale = async (request, response) => {
  const { id } = request.params;
  const result = await salesService.deleteSale(id);

  if (result.affectedRows === 0) {
    return response
      .status(statusMessages.NOT_FOUND)
      .json({ message: errorMessages.SALE_NOT_FOUND });
  }

  return response
    .status(204).json();
};

module.exports = { getAllSales, getSalesById, deleteSale };
