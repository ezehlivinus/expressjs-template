// Handles middleware
// This works with the package 'express-async-error' that was required at the index server file
// eslint-disable-next-line no-unused-vars
const { logger } = require('../config/logging');

module.exports = (error, req, res, next) => {
  const data = {
    status: false,
    message: `Something failed:... ${error.message}`
  };

  logger.error('From async error middleware', error);
  next(error);
  return res.status(500).send(data);
};
