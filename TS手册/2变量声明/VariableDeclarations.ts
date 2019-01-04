// let input = [1, 2]
// let [first, second] = input

// function f([first, second]: [number, number]) {
//   console.log(first)
//   console.log(second)
// }
// f([1, 2])

// let [first, ...rest] = [1, 2, 3, 4, 5]
// console.log(first)
// console.log(rest)

let [first] = [1, 2, 3, 4]

let [, second, , fourth] = [1, 2, 3, 4]

let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}
let { a, b } = o
