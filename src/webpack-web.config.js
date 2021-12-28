let path = require('path')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let CopyPlugin = require("copy-webpack-plugin")

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    // Entry Location
    entry: path.resolve(__dirname, 'App.js'),
    // Use Babel to Convert to backwards compatible JS
    module: {
        rules: [
            {
                // Use Babel to Convet React to Vanilla JS
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                // Instructions to process SASS and CSS
                test: /\.(scss|css)$/,
                use: [
                    // Extract CSS from JS into Stylesheet
                    MiniCssExtractPlugin.loader,
                    // Load CSS
                    'css-loader',
                    // Use PostCSS to load Tailwind Classes
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: {
                                    tailwindcss: {
                                        config: path.resolve(__dirname, 'tailwind.config.js')
                                    },
                                    autoprefixer: {},
                                    ...(isProduction ? {} : {})
                                }
                            }
                        }
                    },
                    // Convert SASS to CSS
                    'sass-loader'
                ],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        // Output to dist/web folder
        path: path.resolve(__dirname, '../dist/web'),
        filename: 'webapp.js'
    },
    plugins: [
        // Extract CSS from JS
        new MiniCssExtractPlugin(),
        // Copy assets to dist dir
        new CopyPlugin({
            patterns: [
                {from: path.resolve(__dirname, '../assets'), to: path.resolve(__dirname, '../dist/web/assets/')},
                {
                    from: path.resolve(__dirname, './web/index.html'),
                    to: path.resolve(__dirname, '../dist/web/index.html')
                }
            ],
        })
    ],
    // Load static assets from dist/web folder
    devServer: {
        static: {
            directory: path.resolve(__dirname, '..', 'dist', 'web')
        },
        devMiddleware: {
            writeToDisk: true,
        },
        hot: true
    }
};