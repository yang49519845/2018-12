const c = v => console.log(v)

const createCurry = (f, arr = []) => (...args) =>
  (a => (a.length === f.length ? f(...a) : createCurry(f, a)))([...arr, ...args])

// 作者：这波能反杀
// 链接：https://www.jianshu.com/p/5e1899fe7d6b
// 來源：简书
// 简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
// normal

// const getNewArray = arr => arr.map(item => item * 100 + '%')

// c(getNewArray([1, 2, 3, 0.12]))

const _filter = (fun, arr) => arr.filter(fun)

const _find = createCurry(_filter)

const findNumber = _find(item => {
  if (typeof item === 'number') return item
})
findNumber([1, 2, 3, '4', '5'])

const findTwenty = _find(item => {
  if (item === 20) return item
})

c(findTwenty([1, 2, 3, 4, 5, 20, 20, 20]))
