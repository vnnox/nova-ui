/* global __dirname */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const pkg = require('../package.json')


module.exports = {
  entry: {
    vue: path.resolve(__dirname, '../src/vue/index.js')
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, '../libs/'),
    filename:  'nova.vue.js',
    chunkFilename: 'nova.vue.js',
  },
  devtool: false,
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin(`nova.vue.js v${pkg.version}\nAuthor: smohan (mengxw@novastar.tech)\nCopyright 2018, NovaStar Tech Co., Ltd`)
  ]
}