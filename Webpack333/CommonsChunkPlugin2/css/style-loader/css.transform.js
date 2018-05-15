//Commonjs --该方法不是在打包的时候执行的、是在cssloader将style写入html中执行的、
// 运行环境是在浏览器环境下，能拿到浏览器的参数，判断当前浏览器是是什么浏览器，可以知道UA，可以拿到window对象
module.exports = function(css) {
    console.log(css)
    console.log(window.innerWidth)

    //return css //可以直接返回处理后的css
    //return css.replace('red','green')

    //为了证明此方法是在什么时机执行的
    if(window.innerWidth>=768) {
        return css.replace('red', 'green')
    }else{
        return css.replace('red', 'orange')
    }

}