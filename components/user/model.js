const mongoose = require('mongoose');
const genericPlugin = require('../../helpers/generic-plugin');
const userPlugin = require('./plugin');

mongoose.Promise = require('bluebird');

module.exports = function () {

  const user = new mongoose.Schema({

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true, select: false },

    name: { type: String, required: true },

    verificationHash: { type: String },

    emailVerified: { type: Boolean, default: false }
  });
  user.plugin(genericPlugin);
  user.plugin(userPlugin);
  return mongoose.model('user', user);
};