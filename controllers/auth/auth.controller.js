/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validatePassword, validatePasswordWithToken } = require('../../services/auth.service');
const { SECRET } = require('../../config/env');
const { User } = require('../../models/user');
const { validateEmail } = require('../../services/user.service');
const { sendPasswordResetMail } = require('../../services/mail.service');

/**
 * Login a user
 */
exports.login = async (req, res) => {
  // check if user exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send({ status: 'error', message: 'Invalid email  or password' });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send({ status: 'error', message: 'Invalid password or email' });

  const token = user.generateAuthToken();

  res.header('token', token).status(200).send({
    status: true,
    message: 'success',
    data: user
  });
};

/**
 * Verifies if email is correct, through verifying a token
 * This suppose to render html, that uses fetch or
 * axios api to make a request
 */
exports.verifyEmail = async (req, res) => {
  const { token } = req.query;

  const decoded = jwt.verify(token, SECRET);

  const user = await User.findById(decoded._id);
  if (!user) return res.status(404).send({ status: false, message: 'user not found' });
  if (user.verifiedAt) return res.status(200).send({ status: false, message: 'user already verified' });

  user.verifiedAt = new Date();

  await user.save();

  return res.header('token', token).send({
    status: true, message: 'email verified', data: user
  });
};

/**
 * Handles the api-request when a user forgot his/her password
 */
exports.forgotPassword = async (req, res) => {
  const { email } = await validateEmail({ email: req.body.email });

  // verify user
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send({
      status: false, message: 'user with this email does not exist'
    });
  }

  // send reset password mail
  await sendPasswordResetMail(user);

  return res.status(200).send({
    status: true,
    message: 'The link to reset your password has been sent to the provided mail'
  });
};

/**
 * Handles reset password, change the password and save.
 */
exports.resetPassword = async (req, res) => {
  const validData = await validatePasswordWithToken(req.body);

  const decoded = jwt.verify(validData.token, SECRET);

  const user = await User.findById(decoded._id);
  if (!user) return res.status(404).send({ status: false, message: 'user not found' });

  // set password
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(validData.password, salt);

  await user.save();

  // The view unto which this response is returned to
  // can choose to redirect to a new view or handle the response its own way
  return res.status(200).send({ status: true, message: 'success', data: user });
};

/**
 * Show the form/view for resetting a password
 * @param {*} req - express Request object
 * @param {*} res - express Response object
 * @returns {*} view
 */
exports.passwordReset = async (req, res) => {
  const { token } = req.query;

  res.render('auth/password-reset', {
    title: 'Expressjs template',
    token
  }); 
};

/**
 * This changes a user password
 * @param {*} req - express Request object
 * @param {*} res - express Request object
 * @returns {*} { } - object contain  request response
 */
exports.changePassword = async (req, res) => {
  const { password } = await validatePassword(req.body.password);

  const user = await User.findOne({ email: req.user.email });
  if (!user) return res.status(404).send({ status: false, message: 'user not found' });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(password, salt);

  await user.save();

  return res.status(200).send({ status: true, message: 'success', date: user });
};
