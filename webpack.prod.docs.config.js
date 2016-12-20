const webpack = require('webpack');

module.exports = {
  cache: true,

  devtool: 'inline-source-map',

  entry: './src/index.js',

  output: {
    path: __dirname + '/docs',
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

  externals: {
    lodash: '_',
    bluebird: 'Promise',
    firebase: 'firebase',
    classNames: 'classNames',
    react: 'React',
    'react-dom': 'ReactDOM',
    redux: 'Redux',
    'react-redux': 'ReactRedux',
    'redux-thunk': 'ReduxThunk'
  },

  resolve: {
    alias: {
      config: './config/config.prod.json'
    },
    extensions: ['', '.js', '.jsx']
  }

};
