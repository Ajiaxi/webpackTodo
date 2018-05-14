var webpack = require('webpack');
var path = require('path')


module.exports = {
    entry: {
        'pageA': './src2/pageA',
        'pageB': './src2/pageB',
        'vendor':  ['lodash']

    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/',//动态加载代码的路径
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'

    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ //v5 只有这一个代码块的话就打包所有
            async: 'async-common',
            children: true, // 如果设置为 `true`，所有  公共chunk 的子模块都会被选择
            minChunks: 2
        }),
        new webpack.optimize.CommonsChunkPlugin({ //v2 只有这一个代码块的话就打包所有
            name: 'vendor',
            minChunks: Infinity  
        })
    ]
}