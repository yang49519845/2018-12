// currie
// function A() {
//   // do something
// }
// function add(a, b, c) {
//   return a + b + c
// }
// function _add(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c
//     }
//   }
// }
// console.log(add(1, 2, 3))
// console.log(_add(1)(2)(3))

// function createCurry(func, args) {
//   var arity = func.length
//   var args = args || []

//   return function() {
//     var _args = [].slice.call(arguments)

//     ;[].push.apply(_args, args)
//     // 如果参数小于最初的function。length 则递归继续收集参数
//     if (_args.length < arity) {
//       return createCurry.call(this, func, _args)
//     }
//     // 收集完毕，执行func
//     return func.apply(this, _args)
//   }
// }
// var currie = createCurry((a, b, c) => a + b + c)

// console.log(currie(1, 2, 3))
// console.log(currie(1)(2)(3))
// console.log(currie(1, 2)(3))
// console.log(currie(1)(2, 3))

const currie = (f, arr = []) => (...args) => (a => (a.length === f.length ? f(...a) : currie(f, a)))([...arr, ...args])
const cur = currie((a, b, c) => a + b + c)
console.log(cur(1, 2, 3))
console.log(cur(1)(2, 3))
console.log(cur(1)(2)(3))
