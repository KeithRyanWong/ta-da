var path = require('path');

module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    filename: './app/assests/javascripts/bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/,/\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};