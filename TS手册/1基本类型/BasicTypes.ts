// boolean 布尔类型
let isDone: boolean = false

// number 数字类型
let age: number = 15

// string 字符串类型
let user: string = 'zhangsan'

// array 数组
let list: number[] = [1, 2, 3, 4, 5]
let like: Array<number> = [1, 2, 3, 4, 5]
// 元组
let x: [string, number]
x = ['x坐标', 123]

// enum 枚举
enum Color {
  Red = '#ff0000',
  Green = '#00ff00',
  Blue = '#0000ff'
}
let c: Color = Color.Red

// any 任何
// atWill = []
let atWill: any = '123'

// void  空
function fn(): void {
  console.log('没有返回任何类型')
}

// undefined
let dontNow: undefined = undefined

// null
let nulls: null = null

// never
function errFn(): never {
  throw console.error('错误')
}

// object
declare function create(o: object | null): void
create({})
create(null)
create([])

// 断言
let someValue: any = 'this is a string'
// 角括号语法
let strLength: number = (<string>someValue).length
// as-syntax 语法
let ctrLength: number = (someValue as string).length
