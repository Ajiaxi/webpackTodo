
// require.ensure(['./subPageA', './subPageB'], function () {

//     var subPageA = require('./subPageA')
//     var subPageB = require('./subPageB')
// })

//想要分割单entry代码，需要提前引入但是不运行此将用de 共用模块
// 例子中的pageA 和 pageB 都有公用模块 moduleA，所以提前引用moduleA

require.include('./moduleA')
var page = 'subPageA'

// if(page === 'subPageA') {
//     require.ensure(['./subPageA'], function() {
//         var subPageA = require('./subPageA')
//     },"subPageA")
// }else if (page === 'subPageB') {
//     require.ensure(['./subPageB'], function() {
//         var subPageB = require('./subPageB')
//     }, "subPageB")
// }

if (page === 'subPageA') {
    import(/* webpackChunkName: 'subpageA' */'./subPageA').then( function (subPageA) {
        console.log(subPageA)
    });
    import(/* webpackChunkName: 'subpageB' */ './subPageB').then(function (subPageB) { //注释格式一定不能写错
        console.log(subPageB)
    });
    
} else if (page === 'subPageB') {
    import(/* webpackChunkName: 'subpageB' */ './subPageB').then(function (subPageB) { //注释格式一定不能写错
        console.log(subPageB)
    });
 }
 

import * as _ from 'lodash'

export default 'pageA'