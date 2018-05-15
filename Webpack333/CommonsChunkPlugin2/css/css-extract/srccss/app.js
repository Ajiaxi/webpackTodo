import base from '../css/base.less'
import common from '../css/common.less'

document.getElementById('app');
app.innerHTML = '<div class="'+ base.box +'"></div>'

import(/*webpackChunkName:'a'*/'./components/a').then(function(a) { 
    //异步加载css，将css加入js中
    console.log(a)
})
