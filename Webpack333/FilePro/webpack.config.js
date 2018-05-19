var webpack = require('webpack');
var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

var PurifyCSS = require('purifycss-webpack');
var glob = require('glob-all')


module.exports = {
    entry: {
        app: './doimg/app.js'
        
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/', //资源引入路径、不引入则会默认加载跟目录
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },

    resolve: {
        alias: {
            jquery$: path.resolve(__dirname, './doimg/libs/jquery/src/jquery') //引入本地准确的第三方包
        },
    },
    //file-loader: 字体文件的处理
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
                                    // require('postcss-sprites')({
                                    //     spritePath: 'dist/assets/imgs/sprites', //放置路径
                                    //     retina: true //生成视网膜像素级图片
                                    // }),//合成雪碧图
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
            },
            {
                test: /\.(png|jpg|jepg|gif)$/,
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         //publicPath: '',
                    //         //outputPath: '../dist/',指定打包位置
                    //         useRelativePath: true
                    //     }
                    // },
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].min.[hash:5].[ext]',
                            limit: 10000,//当图片大小 大于 10k的时候，次loader就和file-loader作用一样了，配上一下三个配置项
                            //publicPath: '', 
                            //outputPath: '../dist/',指定打包位置
                            //useRelativePath: true
                        }
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            pngquant: {
                                quality: 80
                            }
                        }
                    }
                    
                ]
            }, 
            {
                test: /\.(eot|woff2?|woff|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].min.[hash:5].[ext]',
                            limit: 5000,
                            publicPath: '', 
                            outputPath: '../dist/',//指定打包位置
                            useRelativePath: true
                        }
                    }
                ]

            },
            {
                test: path.resolve(__dirname, 'src/app.js'),
                use: [
                    {
                        loader: 'imports-loader',//准确引入第三方包
                        options: {
                            $: 'jquery'
                        }
                    }
                ]
            }
        ]

    },

    plugins: [
        
        new ExtractTextWebpackPlugin({
            filename: 'css/[name].bundle.css',
            allChunks: true
        }),

        new PurifyCSS({
            paths: glob.sync([
                path.join(__dirname, './doimg/index.html'),
                path.join(__dirname, './doimg/app.js')
            ])
        }),

        // new webpack.ProvidePlugin({
        //     $: 'jquery'
        // }),
        new webpack.optimize.UglifyJsPlugin() //将未应用的js代码从打包的包中剔除《静态treeshaking》


    ]
}