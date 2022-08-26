const { errorMessages } = require('../helpers/messages/errorMessages');
const { statusMessages } = require('../helpers/messages/statusMessages');

const validateName = (request, response, next) => {
  const { name } = request.body;

  if (!name) {
    return response
      .status(statusMessages.BAD_REQUEST)
      .json({ message: errorMessages.NAME_REQUIRED });
  }

  next();
};

const validateNameLength = (request, response, next) => {
  const { name } = request.body;

  if (name.length < 5) {
    return response
      .status(statusMessages.UNPROCESSABLE_ENTITY)
      .json({ message: errorMessages.INVALID_NAME });
  }

  next();
};

module.exports = { validateName, validateNameLength };