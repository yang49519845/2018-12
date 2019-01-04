// 参数内必须有label属性，并且是string
interface labelledObj {
  label: string
}
function printLabel(labelledObj: labelledObj) {
  console.log(labelledObj.label)
}
printLabel({ label: 'qwe' })

/**
 * 配置方块颜色，方块的面积
 *
 * @param {SquareConfig} config
 * @returns {{ color: string; area: number }}
 */
// 1. 可选属性
interface SquareConfig {
  color?: string
  width?: number
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}
createSquare({
  color: '#ff0000'
})

// 2. 只读属性
interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = {
  x: 12,
  y: 13
}

let a: number[] = [1, 2, 3]

let ro: ReadonlyArray<number> = [1, 2, 3]

a.push(4)

interface Counter {
  (start: number): string
  interVal: number
  reset(): void
}
function getCounter(): Counter {
  let counter = <Counter>function(start: number) {}
  counter.interVal = 1
  counter.reset = function() {}
  return counter
}
let cc = getCounter()

class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): void
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}
class Images extends Control implements SelectableControl {
  select() {}
}
