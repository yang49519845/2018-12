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
  let _this = this
  let promise2
  if (_this.status === 'resolved') {
    promise2 = new MyPromise(function(resolve, reject) {
      try {
        let x = onFulfilled(_this.value)
        resolve(x)
      } catch (e) {
        reject(e)
      }
    })
    // _this.onResolvedCallbacks.push(function() {
    //   onFulfilled(_this.value)
    // })
    // _this.onRejectedCallbacks.push(function() {
    //   onRejected(_this.reason)
    // })
  }
  if (_this.status === 'rejected') {
    promise2 = new MyPromise(function(resolve, reject) {
      try {
        let x = onRejected(_this.reason)
        reject(x)
      } catch (e) {
        reject(e)
      }
    })
    onFulfilled(_this.value)
  }
  if (_this.status === 'pending') {
    prommise2 = new MyPromise(function(resolve, reject) {
      try {
        let x = onRejected(_this.reason)
        resolve(x)
      } catch (e) {
        reject(e)
      }
    })
    // onRejected(_this.reason)
  }
  return promise2
}
