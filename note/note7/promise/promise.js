let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.random()
    if (num > 0.5) {
      resolve(num)
    } else {
      reject(num)
    }
  }, 1000)
})
// 链式调用
// 每次都会返回一个新的 Promise，并且可以无限往 then 内部传递
p.then(
  success => {
    return success
  },
  error => {
    return error
  }
).then(
  success => {
    console.log('success ' + success) // success 0.8375625791577663
  },
  error => {
    console.log('error ' + error) // error 0.18922878726263126
  }
)
