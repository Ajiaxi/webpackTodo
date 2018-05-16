import base from '../css/base.less'

document.getElementById('app');
var div = document.createElement('div');
div.className = 'smallBox';
app.appendChild(div)

import { a } from '../common/util'
console.log(a())

// "lodash-es": "^4.17.10", es中模块化的方法。。。。
// 想要tree-shaking lodash  就用  "babel-plugin-lodash": "^3.3.2",
import { chunk } from 'lodash-es'
console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2))
