var webpack = require('webpack');
var path = require('path')


module.exports = {
    entry: {
        'pageA': './src/pageA',
        // 'pageB': './src/pageB',
        // 'vendor':  ['lodash']

    },

    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/',//动态加载代码的路径
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'

    },

    plugins: [
        
    ]
}