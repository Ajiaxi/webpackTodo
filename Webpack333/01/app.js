import "babel-polyfill"; //安装之后即可使用方法

let func = () => {};
const NUM = 45;
let arr = [1, 2, 4];
let arrB = arr.map(item => item * 2);

console.log(new Set(arrB));
