const a: object = {
  name: '张三',
  age: 14,
  isLikeJs: true
}
interface datum {
  name: string
  age: number
  isLikeJs: boolean
}
function introduce(params: datum): string {
  const { name, age, isLikeJs } = params
  return `姓名：${name} 年龄：${age} 喜欢js： ${isLikeJs}`
}
