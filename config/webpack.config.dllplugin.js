const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
  output: {
    filename: '[name].dllplugin.js'
  },

  plugins: [
    new webpack.DllPlugin({
      name: 'dllplugin',
      context: '.',
      path: path.resolve(path.join(__dirname, '../dist/core-manifest.json'))
    })
  ]
});
