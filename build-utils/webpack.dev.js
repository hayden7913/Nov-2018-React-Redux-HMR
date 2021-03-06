const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const commonPaths = require('./common-paths');

const port = process.env.PORT || 3000;

const config = {
  mode: 'development',
  entry: {
    app: `${commonPaths.appEntry}/index.js`
  },
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'cheap-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: `${commonPaths.projectRoot}/public`,
    clientLogLevel: 'error',
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    hot: true,
    stats: 'minimal',
  },
};

module.exports = merge(common, config);
