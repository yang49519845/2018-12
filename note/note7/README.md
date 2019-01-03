# promise

1.  state

        pending   (等待)
        fulfilled (成功)
        rejected  (失败)

        pending 可以转换为 fulfilled 或 rejected

        fulfilled & rejected 不可转换为 pending

2.  resolve / reject

        resolve 可以将 pending 转化为 fulfilled，
        reject 可以将 pending 转化为 rejected

3.  then 方法

        给Promise .then 方法传递两个函数作为参数，可以提供改变状态的回调，第一个为 成功，第二个为 失败。
