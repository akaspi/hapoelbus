module.exports = {
  cache: true,

  entry: './src/index.js',

  output: {
    path: __dirname + '/dist', // eslint-disable-line no-undef
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.json$/, exclude: /node_modules/, loaders: ['json'] },
      { test: /\.rt/, exclude: /node_modules/, loaders: ['react-templates-loader?modules=amd'] },
      { test: /\.scss/, exclude: /node_modules/, loaders: ['style', 'css', 'sass'] },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, exclude: /node_modules/, loaders: ['file'] }
    ]
  },

  resolve: {
    alias: {
      config: './config/config.prod.json'
    },
    extensions: ['', '.js', '.jsx']
  }

};
