/**
 *
 * 封装一个promise
 * @param {Function} executor 执行器
 * @returns { Function }
 */
function MyPromise(executor) {
  // 执行器
  let _this = this // 缓存一个 this 指针
  _this.status = 'pending' // 默认状态为等待
  _this.value = undefined // 成功回调数据
  _this.reason = undefined // 失败回调数据
  _this.onResolvedCallbacks = [] // 存放 then 成功回调
  _this.onRejectedCallbacks = [] // 存放 then 失败回调
  function resolve(value) {
    // 判断 status
    if (_this.status === 'pending') {
      _this.status = 'resolved' // 调用 resolve 时， 修改为resolve状态
      _this.value = value // 保存传入的值
      _this.onResolvedCallbacks.forEach(function(fn) {
        fn()
      })
    }
  }
  function reject(reason) {
    if (_this.status === 'pending') {
      _this.status = 'rejected' // 调用 rejected 时，修改为 reject 状态
      _this.reason = reason // 保存失败原因
      _this.onRejectedCallbacks.forEach(function() {
        fn()
      })
    }
  }
  executor(resolve, reject) // 执行 执行器函数
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  // 成功和失败默认不传一个函数，解决了.then内部什么也不写
  onFulfilled =
    typeof onFulfilled === 'function'
      ? onFulfilled
      : function(value) {
          return value
        }
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : function(err) {
          throw err
        }
  let _this = this
  let promise2 // 返回的promise
  if (_this.status === 'resolved') {
    promise2 = new MyPromise(function(resolve, reject) {
      setTimeout(function() {
        try {
          let x = onFulfilled(_this.value)
          // 写一个方法，统一处理 可能既调resolve又调reject，得忽略后一个。
          resolvePromise(promise2, x, resolve, reject)
        } catch (err) {
          reject(err)
        }
      })
    })
  }
  if (_this.status === 'rejected') {
    promise2 = new MyPromise(function(resolve, reject) {
      setTimeout(function() {
        try {
          let x = onFulfilled(_this.reason)
          // 写一个方法，统一处理 可能既调resolve又调reject，得忽略后一个。
          resolvePromise(promise2, x, resolve, reject)
        } catch (err) {
          reject(err)
        }
      })
    })
  }
  if (_this.status === 'pending') {
    promise2 = new MyPromise(function(resolve, reject) {
      _this.onResolvedCallbacks.push(function() {
        setTimeout(function() {
          try {
            let x = onFulfilled(_this.value)
            // 写一个方法，统一处理 可能既调resolve又调reject，得忽略后一个。
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      })
      _this.onRejectedCallbacks.push(function() {
        setTimeout(function() {
          try {
            let x = onRejected(_this.reason)
            // 写一个方法，统一处理 可能既调resolve又调reject，得忽略后一个。
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        })
      })
    })
  }
  return promise2
}
// 捕获错误的方法，在原型上有catch方法，返回一个没有resolve的then结果即可
MyPromise.prototype.catch = function(callback) {
  return this.then(null, callback)
}
// 解析全部方法，接收一个Promise数组promises,返回新的Promise，遍历数组，都完成再resolve
MyPromise.all = function(promises) {
  //promises是一个promise的数组
  return new Promise(function(resolve, reject) {
    let arr = [] //arr是最终返回值的结果
    let i = 0 // 表示成功了多少次
    function processData(index, y) {
      arr[index] = y
      if (++i === promises.length) {
        resolve(arr)
      }
    }
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(function(y) {
        processData(i, y)
      }, reject)
    }
  })
}
// 只要有一个promise成功了 就算成功。如果第一个失败了就失败了
MyPromise.race = function(promises) {
  return new Promise(function(resolve, reject) {
    for (var i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}
// 生成一个成功的promise
MyPromise.resolve = function(value) {
  return new Promise(function(resolve, reject) {
    resolve(value)
  })
}
// 生成一个失败的promise
MyPromise.reject = function(reason) {
  return new Promise(function(resolve, reject) {
    reject(reason)
  })
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    // then的promise = 前一次的promise(自身)
    return reject(new TypeError('循环引用'))
  }
  let called // 是否调用过成功或失败
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          function(y) {
            if (called) return
            called = true
            resolvePromise(promise2, x, resolve, reject)
          },
          function(err) {
            if (called) return
            called = true
            reject(err)
          }
        )
      } else {
        resolve(x)
      }
    } catch (err) {
      if (called) return
      called = true
      reject(err)
    }
  } else {
    resolve(x)
  }
}

// https://juejin.im/post/5ab20c58f265da23a228fe0f
