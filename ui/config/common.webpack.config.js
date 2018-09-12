const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const paths = require('./paths');

module.exports = {
  entry: paths.client('index.jsx'),
  stats: {
    modules: false,
    children: false,
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: paths.root() }),
    new HtmlWebpackPlugin({
      template: paths.client('index.html'),
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV', 'PORT']),
  ],
  output: {
    filename: 'bundles/[name].[hash].js',
    path: paths.dist(),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        exclude: [/\.(js|jsx|mjs|html|json|css)$/],
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[hash].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.mjs', '.jsx'],
    symlinks: false,
    modules: [path.resolve(__dirname, '../node_modules')],
  },
};
