const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: './client/client.js',
    output: {
        path: path.join(__dirname, 'build/client/'),
        filename: 'assets/client.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            'es2015',
                            {
                                'modules': false
                            }
                        ],
                        'react'
                    ],
                },
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader'
                ]
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.svg$/,
                loaders: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    },
                    {
                        loader: 'react-svg-loader',
                        query: {
                            jsx: true
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
        }),
        new CopyWebpackPlugin([
            {
                from: './client/images/',
                to: 'assets/images/',
            }
        ]),
    ],
    devServer: {
        inline: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 3001,
        contentBase: path.join(__dirname, 'build/client'),
        proxy: {
            '/api/**': {
                target: {
                    host: 'localhost',
                    protocol: 'http:',
                    port: 3000,
                    cookieDomainRewrite: 'localhost:3000'
                },
            },
        },
    },
};

module.exports = config;