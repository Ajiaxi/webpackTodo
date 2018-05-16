var webpack = require('webpack');
var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

var PurifyCSS = require('purifycss-webpack');
var glob = require('glob-all')


module.exports = {
    entry: {
        app: './tree-shaking/app.js'
        
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/', //资源引入路径、不引入则会默认加载跟目录
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },

    //JS Tree Shaking 按需打包
    //CSS Tree Shaking 按需打包 --webpack插件  purifycss-webpack //https://www.npmjs.com/package/purifycss-webpack
     // - npm glob-all purify-css purifycss-webpack -S 
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
                
            },
            {
                test: /\.js$/,
                use: [
                   {
                       loader: 'babel-loader',
                       options: {
                           presets: ['env'],//JS Tree Shaking 按需打包
                           plugins: ['lodash'] //模块化打包（剔除）lodash是要用的<第三方插件treeshaking>
                       }
                   } 
                ]
            }
        ]

    },

    plugins: [
        
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css',
            allChunks: false
        }),

        new PurifyCSS({
            paths: glob.sync([
                path.join(__dirname, './*.html'),
                path.join(__dirname, './tree-shaking/*.js') 
            ])
        }),

        new webpack.optimize.UglifyJsPlugin() //将未应用的js代码从打包的包中剔除《静态treeshaking》


    ]
}