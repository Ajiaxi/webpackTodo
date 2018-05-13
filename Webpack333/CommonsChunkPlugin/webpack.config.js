var webpack = require('webpack');
var path = require('path')


module.exports = {
    entry: {
        'pageA': './src/pageA',
        'pageB': './src/pageB',
        'vendor':  ['lodash']

    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'

    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ //v1 在v2的基础上提取单entry内的共用模块
            name: 'common',
            minChunks: 2,
            chunks: ['pageA', 'pageB']
        }),
        // new webpack.optimize.CommonsChunkPlugin({ //v2 只有这一个代码块的话就打包所有
        //     name: 'vendor',
        //     minChunks: Infinity  
        // }),
        // new webpack.optimize.CommonsChunkPlugin({ //v3 不然就会分自己写的包和依赖包 重新打包
        //     name: 'manifest',
        //     minChunks: Infinity
        // })
        new webpack.optimize.CommonsChunkPlugin({ //v4 ->将v2,v3合并 
            names: ['vendor','manifest'],
            minChunks: Infinity
        })

    ]
}