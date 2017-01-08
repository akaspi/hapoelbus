module.exports = {
  cache: true,

  devtool: 'inline-source-map',

  entry: [
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
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel'] },
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['react-hot-loader', 'babel'] },
      { test: /\.json$/, exclude: /node_modules/, loaders: ['json'] },
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
      config: '../config/config.dev.json'
    },
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    contentBase: './docs',
    hot: true
  }

};
