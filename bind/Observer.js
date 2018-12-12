// 定义一个监听器
function definReactive(data, key, val) {
  observe(val);
  var dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 是否需要订阅
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return val;
    },
    set(newVal) {
      if (val === newVal) {
        return;
      }

      val = newVal;

      dep.notify(); // 数据发送变化，通知所有订阅
    }
  });
}
function observe(data) {
  if (!data || typeof data !== "object") {
    return;
  }
  Object.keys(data).forEach(key => {
    definReactive(data, key, data[key]);
  });
}
// 订阅者
function Dep() {
  this.subs = [];
}
Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub);
    console.log(this.subs)
  },
  notify: function() {
    this.subs.forEach(function(sub) {
      sub.update();
    });
  }
};
