var webpack = require('webpack');

module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 7777
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders:[
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
    ]
  }

};