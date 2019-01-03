const add = (...args) => {
  const _args = [].slice.call([...args])
  const adder = () => {
    const _adder = (...argss) => {
      _args.push(...argss)
      return _adder
    }
    _adder.toString = () => {
      return _args.reduce((a, b) => a + b)
    }
    return _adder
  }
  return adder(..._args)
}
console.log(typeof add(1, 2, 3))
console.log(add(1, 2)(3))
console.log(add(1)(2)(3))
