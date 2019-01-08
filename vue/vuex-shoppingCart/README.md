## myvue

## vuex 核心组织

- state (单一状态树 数据源)

- getter (从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数)

- actions (分发改变数据动作，未改变数据)

- mutation (接受到动作，改变数据)

- module (相当于 Redux 合并 ruducer, 将多个 单一状态树 (state1, state2)合并为一个状态树 (state: {a:state1, b: state2}))
