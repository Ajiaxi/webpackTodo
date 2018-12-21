import _ from 'lodash';
import Icon from './icon.png';
import printMe from './print.js';

function component() {
    var ele = document.createElement('div');
    // _.join(['a', 'b', 'c'], '~');
    // => 'a~b~c'
    ele.innerHTML = _.join(['Hello','webpack'], ' ');
    //https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList
    ele.classList.add('hello');

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    //给div增加一张图片
    var myIcon = new Image();
    myIcon.src = Icon;
    ele.appendChild(myIcon);
    ele.appendChild(btn);
    return ele;
}

//接受print.js模块的热更新
if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }

document.body.appendChild(component())