// const { errorMessages } = require('../helpers/messages/errorMessages');
// const { statusMessages } = require('../helpers/messages/statusMessages');

// const validateProductId = async (request, response, next) => {
//   const sale = request.body;

//   if (sale.some((item) => item.productId === undefined)) {
//     return response
//       .status(statusMessages.BAD_REQUEST)
//       .json(errorMessages.PRODUCT_ID_REQUIRED);
//   }

//   next();
// };

// const validateQuantity = async (request, response, next) => {
//   const sale = request.body;
  
//   if (sale.some((item) => item.quantity === undefined)) {
//     return response
//       .status(statusMessages.BAD_REQUEST)
//       .json(errorMessages.QUANTITY_REQUIRED);
//   }

//   next();
// };

// const validateItemQuantity = async (request, response, next) => {
//   const sale = request.body;

//   if (sale.some((item) => item.quantity <= 0)) {
//     return response.status().json();
//   }

//   next();
// };

// module.exports = { validateProductId, validateQuantity, validateItemQuantity };
