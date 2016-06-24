const webpack = require('webpack');
const path = require('path');

module.exports = {
  cache: true,
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.rt/, exclude: /node_modules/, loaders: ['react-templates-loader'] },
      { test: /\.scss/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
