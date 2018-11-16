/* global __dirname */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: {
    vue: path.resolve(__dirname, '../src/vue/index.js')
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, '../dist/'),
    filename:  'nova.[name].js',
    chunkFilename: 'nova.[name].js',
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
  ]
}