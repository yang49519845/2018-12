/**
 *
 *
function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = [].slice.call(arguments)
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var adder = function() {
    var _adder = function() {
      // [].push.apply(_args, [].slice.call(arguments));
      _args.push(...arguments)
      return _adder
    }
    // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function() {
      return _args.reduce(function(a, b) {
        return a + b
      })
    }
    return _adder
  }
  // return adder.apply(null, _args);
  return adder(..._args)
}
 */

const add = (...args) => {
  // 第一次执行，声明args，存储所有的参数
  const _args = [].slice.call(args)
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  const adder = () => {
    const _adder = (...argss) => {
      _args.push(...argss)
      return _adder
    }
    // 利用函数隐式转换，计算最终的值
    _adder.toString = () => _args.reduce((a, b) => a + b)
    return _adder
  }
  return adder(...args) // 闭包，存_args, 每次的参数
}
console.log(add(1)(2)(3)(4)(5))
console.log(add(1, 2, 3, 4, 5))
console.log(add(1, 2, 3)(4, 5))
