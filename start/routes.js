// require your routes here
const users = require('../routes/user.routes');
const docs = require('../routes/doc.routes');
const { BASE_PATH } = require('../config/env');

/**
 * Routes list
 */
module.exports = (app) => {
// routes goes here
  app.use(`${BASE_PATH}/users`, users);

  app.use(`${BASE_PATH}/docs`, docs);
  app.use('*', docs);
};
