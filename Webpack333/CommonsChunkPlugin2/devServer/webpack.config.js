var webpack = require('webpack');
var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

var PurifyCSS = require('purifycss-webpack');
var glob = require('glob-all')

var CleanWebpackPlugin = require('clean-webpack-plugin');




module.exports = {
    entry: {
        app: './fileFix/app.js'
        
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/', //资源引入路径、不引入则会默认加载跟目录
        filename: 'js/[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },

    // node_modules/.bin/webpack-dev-server --open
    devServer: {
       // inline: false, 页面显示打包状态
        port: 8233,
        proxy: {
            '/': { //其他地址即可访问 '/api/comment/show'然后带上相应的参数即可 '/api'
                target: 'https://m.weibo.cn',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: {
                    '^/comments': '/api/comments' //访问'/comments'--> '/api/comments'
                },
                headers: { //请求头的信息
                    'Cookie': 'jasd;lkjfaslkfjlksjf;kjadf;ja;lkfdjaljdsfalkjdsaff;j'
                }
            }

        },
        // historyApiFallback: true
        historyApiFallback: {
            rewrites: [
                {
                    from: '/pages/a',
                    to: '/pages/a.html'
                },
                { //规则 http://localhost:8233/new =》 http://localhost:8233/new.html
                    from: /^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
                    to: function (context) {
                        return '/'+ context.match[1]+context.match[2]+'.html';
                    }
                } 
            ]
        }

    },

    //devServer
    // inline contentBase port historyApiFallback https proxy hot openpage lazy overlay
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
                test: /\.(png|jpg|jepg|gif)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            //publicPath: '',
                            //outputPath: '../dist/',指定打包位置
                            useRelativePath: true
                        }
                    }

                ]
            }
            // {
            //     test: /\.js$/,
            //     use: [
            //        {
            //            loader: 'babel-loader',
            //            options: {
            //                presets: ['env'],//JS Tree Shaking 按需打包
            //                plugins: ['lodash'] //模块化打包（剔除）lodash是要用的<第三方插件treeshaking>
            //            }
            //        } 
            //     ]
            // }
        ]

    },

    plugins: [
        
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css',
            allChunks: false
        }),

        new PurifyCSS({
            paths: glob.sync([
                // path.join(__dirname, './*.html'),
                path.join(__dirname, './tree-shaking/*.js') 
            ])
        }),

        new webpack.optimize.UglifyJsPlugin(), //将未应用的js代码从打包的包中剔除《静态treeshaking》

        new CleanWebpackPlugin(['./dist'])

    ]
}