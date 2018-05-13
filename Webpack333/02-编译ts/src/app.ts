import "babel-polyfill"; //安装之后即可使用方法

interface Cat {
    name: string,
    sex: string
}

function touch(cat: Cat) {
    console.log(cat.name)
}
