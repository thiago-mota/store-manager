const errorMessages = {
  PRODUCT_NOT_FOUND: 'Product not found',
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
  NAME_REQUIRED: '"name" is required',
  INVALID_NAME: '"name" length must be at least 5 characters long',
  SALE_NOT_FOUND: 'Sale not found',
  QUANTITY_REQUIRED: '"quantity"is required',
  INVALID_QUANTITY: '"quantity" must be greater than or equal to 1',
  PRODUCT_ID_REQUIRED: '"productId" is required',
};

module.exports = {
  errorMessages,
};
