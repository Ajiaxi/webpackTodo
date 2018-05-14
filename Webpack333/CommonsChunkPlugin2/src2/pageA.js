
import * as _ from 'lodash'
var page = 'subPageA'

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
 



export default 'pageA'