/* global __dirname */
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require('webpack')
const pkg = require('../package.json')

module.exports = {
  entry: {
    nova: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, '../libs/'),
    filename:  '[name].js',
    chunkFilename: '[name].js',
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
    new webpack.BannerPlugin(`nova.vue.js v${pkg.version}\nAuthor: smohan (mengxw@novastar.tech)\nCopyright 2018, NovaStar Tech Co., Ltd`)
  ]
}