const express = require('express');
const webpack = require('webpack');
const opn = require('opn');

const app = express()
const port = 3000

const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const proxyMiddleware = require('http-proxy-middleware')
const historyApiFallback = require('connect-history-api-fallback')



app.listen(port, function () {  
    console.log('success listen to' + port);
    opn('http://localhost:' + port);

})