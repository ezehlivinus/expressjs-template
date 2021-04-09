/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validateUser, validateUpdate } = require('../models/user');
const mailService = require('../services/mail.service');
const { NODE_ENV } = require('../config/env');

class UserController {
/**
 * Retrieve a user
 */
  async retrieve(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send({ status: false, message: 'user not found' });
    res.status(200).send({ status: true, message: 'success', data: user });
  }

  /**
 * List/Fetch all users
 */
  async list(req, res) {
    const users = await User.find();
    if (_.isEmpty(users)) return res.status(404).send({ status: false, message: 'users not found' });

    res.status(200).send({ status: true, message: 'success', data: users });
  }

  /**
 * Create a user
 */
  async create(req, res) {
  // validate req.body
    const validData = await validateUser(req.body);

    let user = await User.findOne({ email: validData.email });
    if (user) return res.status(409).send({ status: false, message: 'user already exist' });

    user = new User({ ...validData });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    // log the user in
    const token = user.generateAuthToken();

    // In local? You need to connect to internet for this to work and set NODE_ENV=production
    if (NODE_ENV === 'production') {
      await mailService.sendVerificationMail(user, token);
    }

    return res.header('token', token).status(201).send({
      status: true, message: 'success', data: user
    });
  }

  /**
 * Update a user
 */
  async update(req, res) {
    let requestBody = await validateUpdate(req.body);

    // remove password and role from req.body
    requestBody = _.omit(req.body, ['password', 'role']);

    const options = { new: true, runValidators: true };
    await User.findByIdAndUpdate(req.params.id, {
      ...requestBody
    }, options, async (error, user) => {
      if (error) throw error;
      if (!user) return res.status(404).send({ status: false, message: 'user not found' });

      res.status(200).send({ status: true, message: 'success', data: user });
    });
  }

  /**
 * Delete a user
 */
  async delete(req, res) {
  // validate,
  // only a user will can delete itself, admin can also delete
  // if (req.user._id !== req.params.id) return res.status(400).send('Bad request');

    const user = await User.findByIdAndRemove(req.params.id);

    if (!user) return res.status(404).send({ status: false, message: 'user not found' });

    res.status(200).send({ status: true, message: 'success', data: user });
  }
}

module.exports = new UserController();
