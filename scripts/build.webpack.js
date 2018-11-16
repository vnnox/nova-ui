/* global __dirname */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    native: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, '../dist/'),
    filename:  'nova.[name].js',
    chunkFilename: 'nova.[name].js',
    library: 'Nova',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'nova.css',
      chunkFilename: 'nova.css'
    }),
    new OptimizeCSSPlugin({ safe: true, map: false, discardComments: { removeAll: true } }),
  ]
}