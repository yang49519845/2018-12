# 柯里化大白话。

### https://www.jianshu.com/p/5e1899fe7d6b (深入详解函数的柯里化)

一种函数，他接收函数 A 作为参数， 运行后返回一个新的函数，并且新的函数可以处理 A 剩余的参数。

- 简单实现，参数只能从右到左传递

        function createCurry(func, args) {
        var arity = func.length
        va r args = args || []

        return function() {
            var _args = [].slice.call(arguments)

            ;[].push.apply(_args, args)
            // 如果参数小于最初的function.length 则递归继续收集参数
            if (_args.length < arity) {
              return createCurry.call(this, func, _args)
            }
            // 收集完毕，执行func
            return func.apply(this, _args)

        }
        }
        var currie = createCurry((a, b, c) => a + b + c)

        console.log(currie(1, 2, 3)) // 6
        console.log(currie(1)(2)(3)) // 6
        console.log(currie(1, 2)(3)) // 6
        console.log(currie(1)(2, 3)) // 6

- 精简的 currie

        const currie = (f, arr = []) => (...args) => (a => (a.length === f.length ? f(...a) : currie(f, a)))([...arr, ...args])
        const cur = currie((a, b, c) => a + b + c)
        console.log(cur(1, 2, 3)) // 6
        console.log(cur(1)(2, 3)) // 6
        console.log(cur(1)(2)(3)) // 6

- 柯里化可阔性

        const createCurry = (f, arr = []) => (...args) => (a => (a.length === f.length ? f(...a) : createCurry(f, a)))([...arr, ...args])

        const _filter = (fun, arr) => arr.filter(fun)

        const _find = createCurry(_filter)

        const findNumber = _find(item => {
          if (typeof item === 'number') return item
        })

        findNumber([1, 2, 3, '4', '5']) // [1,2,3]

        const findTwenty = () => _find(item => {
          if(item === 20) return item
        })

        findTwenty([1,2,3,4,5,20,20,20]) // [20,20,20]

1.  ES6 不定参数

            const fn = (...args) => [...args]
            fn(1,2,3,4,5) // [1,2,3,4,5]
            const add = (a, b, c, d) => a + b + c + d
            const args = [1, 2, 3, 4]
            add.apply(null, args) // 10
            add(...args) // 10

2.  函数的隐式转换

          function fn() {
          return 20
          }
          console.log(fn + 10) // function fn() { return 20 }10
          // 隐式的调用了 toString

3.  无限参数柯里化

          const add = (...args) => {
            // 第一次执行，声明 args，存储所有的参数
            const _args = [].slice.call(args)
            // 在内部声明一个函数，利用闭包的特性保存_args 并收集所有的参数值
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
          console.log(add(1)(2)(3)(4)(5)) // 15
          console.log(add(1, 2, 3, 4, 5)) // 15
          console.log(add(1, 2, 3)(4, 5)) // 15
