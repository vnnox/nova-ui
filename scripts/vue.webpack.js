/* global __dirname */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const pkg = require('../package.json')


module.exports = {
  entry: {
    'nova': path.resolve(__dirname, '../src/vue/index.js')
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, '../libs/'),
    filename:  'nova-vue.js',
    chunkFilename: 'nova-vue.js', // 不能直接用.vue, 如果webpack中设置了alias: vue$, 将会获取不到
    library: 'Nova',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
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
    new webpack.BannerPlugin(`nova-vue.js v${pkg.version}\nAuthor: smohan (mengxw@novastar.tech)\nCopyright 2019, NovaStar Tech Co., Ltd`)
  ]
}