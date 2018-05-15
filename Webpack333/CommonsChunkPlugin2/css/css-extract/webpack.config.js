var webpack = require('webpack');
var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry: {
        app: './srccss/app.js'
        
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/', //资源引入路径、不引入则会默认加载跟目录
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },

    //提取css extract-loader//ExtractTextWebpackPlugin
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: {
                        loader: 'style-loader'
                    },
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                //minimize: true,
                                modules: true,
                                localIdentName: '[path][name]_[local]_[hash:base64:5]' //.css-common_bigBox_3EJma
                            }
                        },
                        {
                            loader: 'less-loader'
                        }

                    ]
                })
                
                
            }
        ]

    },

    plugins: [
        
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css',
            allChunks: false
        })

    ]
}