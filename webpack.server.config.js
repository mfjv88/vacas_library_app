var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x){
      return ['.bin'].indexOf(x) === -1
    })
    .forEach(function(mod){
      nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
  name: 'server',
  target: 'node',
  entry: {
    // bundle: './client/index.js',
    render: './server/routes/jsx/render.jsx'
  },
  output: {
    // path: path.join(__dirname, 'client'),
    path: path.join(__dirname, 'server/routes'),
    publicPath: 'server/routes',
    filename: '[name].js'
  },
  externals: nodeModules,
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};
