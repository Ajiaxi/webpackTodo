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

    //css-loader
    //options ---> 
        //alias(解析的别名)
        // importLoader(@import) 
        //Minimize(是否压缩) 
        //modules (启用css-modules)css模块化
    // 伪类属性
    //    :local(局部样式) :global(全局样式) 
    // compose(继承一段样式)、 compose...from path(从一个路径里面继承一段样式)   
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            modules: true,
                            localIdentName: '[path][name]_[local]_[hash:base64:5]' //.css-common_bigBox_3EJma
                        }
                    }
                
                ]
            }
        ]

    },

    plugins: [
        
    ]
}