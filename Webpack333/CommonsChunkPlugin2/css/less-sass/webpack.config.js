var webpack = require('webpack');
var path = require('path')


module.exports = {
    entry: {
        app: './app.js'
        
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/', //资源引入路径、不引入则会默认加载跟目录
        filename: '[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [ 
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            modules: true,
                            localIdentName: '[path][name]_[local]_[hash:base64:5]' //.css-common_bigBox_3EJma
                        }
                    },
                    {
                        loader: 'less-loader'

                    }
                
                ]
            }
        ]

    },

    plugins: [
        
    ]
}