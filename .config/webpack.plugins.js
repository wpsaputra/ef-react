const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
  new ForkTsCheckerWebpackPlugin({
    async: false,
  }),
  new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, '..', 'src', 'main', 'preload.js'),
      to: path.resolve(__dirname, '..', '.webpack', 'main', 'preload.js')
    }
  ])
]
