整个应用是一个大的函数

        function 调用 function

组件的分类

- 接入型 container
- 展示型
- 交互型 比如各类加强版的表单组件，通常强调复用
- 功能型 比如 `<router-view>`，`<transition>`，作为一种扩展、抽象机制存在。

变化侦测和渲染机制

声明式

jquery

view = render(state)

虚拟 DOM

变化侦测

传统 css 的一些问题：

1. 作用域
2. Critical CSS
3. Atomic CSS
4. 分发复用
5. 跨平台复用 n

构建工具解决的其实是几方面的问题：

- 任务的自动化
- 开发体验和效率（新的语言功能，语法糖，hot reload 等等）
- 部署相关的需求
- 编译时优化
