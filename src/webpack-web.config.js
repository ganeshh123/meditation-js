let webpack = require('webpack')
let path = require('path')

let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let CopyPlugin = require("copy-webpack-plugin")


module.exports = {
    // Entry Location
    entry: path.resolve(__dirname, 'App.js'),
    // Use Babel to Convert to backwards compatible JS
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(scss|css)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    // Output to dist/web folder
    output: {
      path: path.resolve(__dirname, '../dist/web'),
      filename: 'webapp.js'
    },
    // Enable React Hot Loading
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin(),
      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, '../assets'), to: path.resolve(__dirname, '../dist/web/assets/') },
          { from: path.resolve(__dirname, './web/index.html'), to: path.resolve(__dirname, '../dist/web/index.html') }
        ],
      })
    ],
    // Load static assets from dist/web folder
    devServer: {
      writeToDisk: true,
      contentBase: path.resolve(__dirname, '..', 'dist', 'web')
    }
  };