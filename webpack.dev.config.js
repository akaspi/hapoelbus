const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,

  devtool: 'cheap-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: __dirname + '/docs', // eslint-disable-line no-undef
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" }, // creates style nodes from JS strings
          { loader: "css-loader" }, // translates CSS into CommonJS
          { loader: "sass-loader" } // compiles Sass to CSS
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
        exclude: /node_modules/,
        loader: 'file-loader'
      }
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
      config: '../config/config.dev.json'
    },
    extensions: ['.js', '.jsx', '.json']
  },

  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'docs'), // eslint-disable-line no-undef
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
  ]

};
