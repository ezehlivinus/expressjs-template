const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const asyncError = require('../middlewares/async-error.middleware');
const { exceptRejectionLogger } = require('../config/logging');
const routes = require('./routes');

exceptRejectionLogger();
require('../config/database')();

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(cors());
  app.use(express.json());
  routes(app);

  app.use(asyncError);
};
