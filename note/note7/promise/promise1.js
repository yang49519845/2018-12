// .catch 方法
// catch 相当于 .then(null, reject)

// promise.all()
// 统一处理 promise

let promise1 = new Promise((resolve, reject) => {
  resolve({ success: 'success' })
})
let promise2 = new Promise((resolve, reject) => {
  resolve({ b: 'promise2' })
})
let promise3 = new Promise((resolve, reject) => {
  resolve({ c: 'promise3' })
})

// let Prse = Promise.all([promise1, promise2, promise3])
let PrseRace = Promise.race([promise1, promise2, promise3])
PrseRace.then(
  success => {
    console.log(success)
  },
  err => {
    console.log(err)
  }
)
