// const chocolate = {
//   hasChocolate: () => true
// }
// const caramelSwirl = {
//   hasCaramelSwirl: () => true
// }
// const pecans = {
//   hasPecans: () => true
// }
// const iceCream = Object.assign({}, chocolate, caramelSwirl, pecans)

// console.log(iceCream)

function base(spec) {
  var that = {}
  that.name = spec.name
  return that
}
function child(spec) {
  var that = base(spec)
  that.sayHello = function() {
    return "Hello I'm " + that.name
  }
  return that
}

var result = child({ name: 'a functional Object' })
console.log(result.sayHello())
