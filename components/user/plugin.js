module.exports = exports = function verificationHashPlugin(schema, options) {
  schema.pre('save', function (next) {
    this.verificationHash = _.sampleSize(
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(''), 7
    ).join('');
    next();
  });

  // if there is need to index the 'verificationHash' in future;
  if (options && options.index) {
    schema.path('verificationHash').index(options.index);
  }
};
