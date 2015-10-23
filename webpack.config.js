'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: __dirname + '/client/src/main.js',
        vendor: ['react', 'lodash', 'firebase', 'material-ui']
    },
    output: {
        path: __dirname + '/client/public',
        filename: 'bundle.js',
        pathinfo: true
    },
    externals: {
        "_": 'lodash'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity)
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'resolve-url', 'sass']
            },
            {
                test: /\.rt/,
                loader: "react-templates-loader"
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
                loader: "file"
            }
        ]
    }
};
