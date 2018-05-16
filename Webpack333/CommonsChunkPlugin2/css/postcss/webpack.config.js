var webpack = require('webpack');
var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry: {
        app: './postcss/app.js'
        
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/', //资源引入路径、不引入则会默认加载跟目录
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },

    // PostCSS, Autoprefixer, CSS-nano, CSS-next
    // Autoprefixer: 帮忙加上css兼容各个浏览器的前缀，
    // CSS-nano: 控制css-loader里面css的压缩
    // CSS-next: 使用未来css的语法：CSS Variables/ custom selectors calc()
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
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                   // require('autoprefixer')(),
                                    require('postcss-cssnext')() //此部分已包含上一部分功能
                                ]
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