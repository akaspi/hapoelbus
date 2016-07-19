const webpack = require('webpack');
const path = require('path');

module.exports = {
  cache: true,
  devtool: 'inline-source-map',
  entry: {
    app: ['./client/src/index.js'],
    vendors: ['lodash', 'react', 'react-dom', 'redux', 'react-redux']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'client/dist'),
    publicPath: '/client/dist/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.json$/, exclude: /node_modules/, loaders: ['json'] },
      { test: /\.rt/, exclude: /node_modules/, loaders: ['react-templates-loader'] },
      { test: /\.scss/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors'
    })
  ]
};
