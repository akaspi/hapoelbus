const webpack = require('webpack');
const path = require('path');

module.exports = {
  cache: true,

  entry: './src/index.js',

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.json$/, exclude: /node_modules/, loaders: ['json'] },
      { test: /\.rt/, exclude: /node_modules/, loaders: ['react-templates-loader?modules=amd'] },
      { test: /\.scss/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, exclude: /node_modules/, loaders: ['file'] }
    ]
  },

  resolve: {
    alias: {
      config: __dirname + 'src/config.js'
    }
  }

};
