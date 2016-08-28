const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config.js');
const _ = require('lodash');

const webpackDevConfig = _.cloneDeep(webpackConfig);
const devPort = 3000;

webpackDevConfig.entry.app.unshift('webpack/hot/only-dev-server');
webpackDevConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:' + devPort);
webpackDevConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

new WebpackDevServer(webpack(webpackDevConfig), {
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  stats: {
    colors: true,
    chunks: false
  }
}).listen(devPort, 'localhost');
