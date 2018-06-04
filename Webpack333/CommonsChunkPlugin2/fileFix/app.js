import base from './css/base.less'
import common from './css/common.less'

//模块引入
import {renderA} from './components/a'


document.getElementById('app');
app.innerHTML = '<div class="' + base.box + '"></div>'

$.get('/comments/show', {
    id: '4318059808742307894',
    page: 1
}, function (data) { 
    console.log(data)
})

renderA()

if(module.hot) {//对于单个文件已经生效; ===
    module.hot.accept()
}