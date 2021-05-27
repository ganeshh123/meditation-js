let path = require('path')

module.exports = {
    // Entry Location
    entry: path.resolve(__dirname, 'App.js'),
    // Use Babel to Convert to backwards compatible JS
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js']
    },
    // Output to dist/web folder
    output: {
      path: path.resolve(__dirname, 'dist/web'),
      filename: 'webapp.js'
    },
    // Load static assets from dist/web folder
    devServer: {
      contentBase: path.resolve(__dirname, '../dist/web'),
    }
  };