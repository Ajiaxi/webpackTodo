var webpack = require('webpack');
var path = require('path')


module.exports = {
    entry: {
        app: './app.js'
        //app: './app2.js'
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/', //资源引入路径、不引入则会默认加载跟目录
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 
                    // {loader: 'style-loader'},
                    // {loader: 'css-loader'} //打包加载css

                    // {loader: 'style-loader/url'},    
                    // {loader: 'file-loader'} //打包加载css引入css文件路径《多文件则会生成多个css文件\耗能》

                    // 入口文件app2.js 是否插入css文件 
                    //\{
                    //     loader: 'style-loader/useable'
                    // }, {
                    //     loader: 'css-loader'
                    // }

                    //insertAt: 插入位置 , insertInto: 插入dom
                    //singleton: 是否只使用一个style标签 , transform: 转化，浏览器环境下，插入页面前
                    
                    {
                        loader: 'style-loader',
                        options: {
                            insertInto: '#app',
                            singleton: true,
                            transform: './css.transform.js'
                        }
                    },
                    {loader: 'css-loader'} //打包加载css

                
                ]
            }
        ]

    },

    plugins: [
        
    ]
}