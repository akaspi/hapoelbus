module.exports = {
  cache: true,

  devtool: 'cheap-module-source-map',

  entry: './src/index.js',

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
      config: '../config/config.prod.json'
    },
    extensions: ['.js', '.jsx']
  }

};
