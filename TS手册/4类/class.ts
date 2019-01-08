class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'hello ' + this.greeting
  }
}

let greeter = new Greeter('world')

// Inheritance 继承
// class Animal {
//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m.`)
//   }
// }
// class Dog extends Animal {
//   bark() {
//     console.log('woof! woof!')
//   }
// }

// const dog = new Dog()

// dog.bark()
// dog.move(10)
// dog.bark()

class Animal {
  name: string
  constructor(theName: string) {
    this.name = theName
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}
