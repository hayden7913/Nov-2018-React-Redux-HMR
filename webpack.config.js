const devConfig = require('./build-utils/webpack.dev.js');
const prodConfig = require('./build-utils/webpack.prod.js');

module.exports = env => (
  env && env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig
);
