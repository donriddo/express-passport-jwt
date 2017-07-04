const mongoose = require('mongoose');
// const genericPlugin = require('../../helpers/plugin');
const userPlugin = require('./plugin');
module.exports = function () {

  const user = new mongoose.Schema({

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    name: { type: String, required: true },

    verificationHash: { type: String },

    emailVerified: { type: Boolean, default: false }
  });
  // user.plugin(genericPlugin);
  user.plugin(userPlugin);
  return mongoose.model('user', user);
};