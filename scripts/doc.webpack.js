const path = require('path')
const striptags = require('./strip-tags')
const md = require('markdown-it')()
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16))
  })
  return str
}

/* global __dirname */

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../examples/entries/index.js'),
    docs: path.resolve(__dirname, '../examples/entries/docs.js'),
    components: path.resolve(__dirname, '../examples/entries/components.js')
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, '../docs/'),
    filename: 'assets/[name]-[hash].js',
    chunkFilename: 'assets/[name]-[hash].js'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
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
                        let style = striptags.fetch(content, 'style')
                        description = description ? `<div class="code-view__describe">${md.render(description)}</div>` : ''
                        let evalCode = JSON.stringify({ style, script })
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
          chunks: 'all',
          minSize: 1
        }
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
      chunks: ['index', 'nova.ui']
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
      chunks: ['docs', 'template', 'nova.ui']
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
      chunks: ['components', 'template', 'nova.ui']
    }),

    new MiniCssExtractPlugin({
      filename: 'assets/[name]-[hash].css',
      chunkFilename: 'assets/[name]-[hash].css'
    }),
    new OptimizeCSSPlugin({ safe: true, map: false, discardComments: { removeAll: true } }),
  ]
}