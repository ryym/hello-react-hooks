const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = __dirname;
const SRC_DIR = path.join(ROOT, 'src');
const DEST_DIR = path.join(ROOT, 'dest');

module.exports = {
  mode: 'development',

  entry: SRC_DIR,

  output: {
    path: DEST_DIR,
    filename: 'bundle.js',
    publicPath: '/',
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: DEST_DIR,
    port: 3000,
    host: '0.0.0.0',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  plugins: [
    new CleanWebpackPlugin([DEST_DIR]),
    new HtmlWebpackPlugin({ template: 'index.html' }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
};
