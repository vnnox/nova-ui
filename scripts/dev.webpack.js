const path = require('path')
const striptags = require('./strip-tags')
const md = require('markdown-it')()
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Babel = require('@babel/core')

//const CopyWebpackPlugin = require('copy-webpack-plugin')

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}

/* global __dirname */

module.exports = env => {
  const isProd = env.production || env === 'production'
  return {
    entry: {
      index: path.resolve(__dirname, '../examples/entries/index.js'),
      docs: path.resolve(__dirname, '../examples/entries/docs.js'),
      components: path.resolve(__dirname, '../examples/entries/components.js'),
      'ui.vue': path.resolve(__dirname, '../src/vue/index.js'),
    },
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, '../docs/'),
      filename: isProd ? 'assets/js/[name]-[hash:7].js' : 'assets/js/[name]-[hash].js',
      chunkFilename: isProd ? 'assets/js/[name]-[hash:7].js' : 'assets/js/[name].[hash].js'
    },
    devtool: isProd ? false : 'source-map',
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
        {
          test: /\.md$/,
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'markdownit-loader',
              options: {
                preset: 'default',
                breaks: true,
                use: [
                  // :::demo some description
                  // ```html
                  // <div>some html</div>
                  // <style>
                  //   body {
                  //     font-size: 14px
                  //   }
                  // </style>  
                  // <script>
                  //   alert(1)
                  // </script>  
                  // ```
                  // :::
                  [
                    require('markdown-it-container'),
                    'demo',
                    {
                      validate(params) {
                        return params.trim().match(/^demo\s*(.*)$/)
                      },
                      render(tokens, index) {
                        let token = tokens[index]
                        if (token.nesting === 1) {
                          const m = token.info.trim().match(/^demo\s*(.*)$/)

                          let description = (m && m.length > 1) ? m[1] : ''
                          let content = tokens[index + 1].content
                          let html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
                          let script = striptags.fetch(content, 'script')
                          // let style = striptags.fetch(content, 'style')
                          description = description ? `<div class="code-view__describe">${md.render(description)}</div>` : ''
                          let evalCode = JSON.stringify({  script })
                          return `<div class="code-view" data-eval="${md.utils.escapeHtml(evalCode)}">
                            <div class="code-view__view">${html}</div>
                            <div class="code-view__detail">
                              ${description}
                              <div class="code-view__source">`
                        }
                        return ` </div>\n</div>
                        <button type="button" class="code-view__ctrl">Source Code</button>
                        </div>\n`
                      }
                    }
                  ],
                  [
                    require('markdown-it-container'),
                    'vue-demo',
                    {
                      validate(params) {
                        return params.trim().match(/^vue-demo\s*(.*)$/)
                      },
                      render(tokens, index) {
                        let token = tokens[index]
                        if (token.nesting === 1) {
                          const m = token.info.trim().match(/^vue-demo\s*(.*)$/)

                          let description = (m && m.length > 1) ? m[1] : ''
                          let content = tokens[index + 1].content
                          // let html = convert(striptags.strip(content, ['script', 'style', 'template'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
                          let script = striptags.fetch(content, 'script')
                          let sourceCode = Babel.transform(script, {
                            presets: ['@babel/preset-env'],
                            sourceType: 'module'
                          })
                          // console.log(sourceCode)
                          // let scriptCode = Object.create(null)
                          // try {
                          //   let code = `
                          //     var exports = Object.create(null);
                          //     ${sourceCode.code}
                          //     return exports;
                          //   `
                          //   // let res = (new Function(code))()
                          //   // scriptCode = res.default
                          //   // if (scriptCode.data && typeof scriptCode.data === 'function') {
                          //   //   scriptCode.data = scriptCode.data()
                          //   // }
                          // } catch (error) {
                          //   console.log(error)
                          // }
                          let template = striptags.fetch(content, 'template')
                          let evalCode = JSON.stringify({code: sourceCode.code, template})
                          // let style = striptags.fetch(content, 'style')
                          description = description ? `<div class="code-view__describe">${md.render(description)}</div>` : ''
    
                          return `<div class="code-view" data-vue-eval="${md.utils.escapeHtml(evalCode)}">
                            <div class="code-view__view"></div>
                            <div class="code-view__detail">
                              ${description}
                              <div class="code-view__source">`
                        }
                        return ` </div>\n</div>
                        <button type="button" class="code-view__ctrl">Source Code</button>
                        </div>\n`
                      }
                    }
                  ]
                ]
              }
            }
          ]
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
            name: isProd ? 'assets/fonts/[name]-[hash:7].[ext]' : 'assets/fonts/[name].[hash].[ext]'
          }
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          default: false,
          template: {
            test: /\.md/,
            name: 'template',
            chunks: 'all',
            minSize: 1
          },
          novaui: {
            test: /[\\/]src[\\/]/,
            name: 'nova.ui',
            chunks(chunk) {
              return chunk.name !== 'ui.vue'
            },
            minSize: 1
          },
          // novauivue: {
          //   test: /[\\/]src[\\/]vue[\\/]/,
          //   name: 'nova.ui.vue',
          //   chunks: 'all',
          //   minSize: 1
          // }
        }
      }
    },

    plugins: [

      // new HtmlWebpackPlugin({template: './examples/index.html'})
      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, '../docs/index.html'),
        template: path.resolve(__dirname, '../examples/entries/index.html'),
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: false,
          minifyCSS: true,
          minifyJS: true
        },
        chunksSortMode: 'dependency',
        chunks: ['index', 'nova.ui', 'ui.vue']
      }),

      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, '../docs/docs/index.html'),
        template: path.resolve(__dirname, '../examples/entries/docs.html'),
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: false,
          minifyCSS: true,
          minifyJS: true
        },
        chunksSortMode: 'dependency',
        chunks: ['docs', 'template', 'nova.ui', 'ui.vue']
      }),

      new HtmlWebpackPlugin({
        filename: path.resolve(__dirname, '../docs/components/index.html'),
        template: path.resolve(__dirname, '../examples/entries/components.html'),
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: false,
          minifyCSS: true,
          minifyJS: true
        },
        chunksSortMode: 'dependency',
        chunks: [ 'template', 'nova.ui', 'ui.vue', 'components',]
      }),

      new MiniCssExtractPlugin({
        filename: isProd ? 'assets/css/[name]-[hash:7].css' : 'assets/css/[name].[hash].css',
        chunkFilename: isProd ? 'assets/css/[name]-[hash:7].css' : 'assets/css/[name].[hash].css'
      }),

      new OptimizeCSSPlugin({ safe: true, map: false, discardComments: { removeAll: true } }),

      new VueLoaderPlugin(),
    ],


    devServer: {
      contentBase: path.join(__dirname, 'docs'),
      compress: true,
      port: 9000,
      hot: true,
      open: true
    }


  }
}