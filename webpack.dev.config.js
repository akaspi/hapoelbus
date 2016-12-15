const webpack = require('webpack');

module.exports = {
  cache: true,

  devtool: 'inline-source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel'] },
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel'] },
      { test: /\.json$/, exclude: /node_modules/, loaders: ['json'] },
      { test: /\.rt/, exclude: /node_modules/, loaders: ['react-templates-loader?modules=amd'] },
      { test: /\.scss/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, exclude: /node_modules/, loaders: ['file'] }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({ isProduction: false })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    contentBase: './dist',
    hot: true
  }

};
