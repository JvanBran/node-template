function copyProperties(target, source) {
    // Reflect.ownKeys 返回所有属性key
    // Object.keys 返回属性key，不包括不可枚举属性
    for(let key of Reflect.ownKeys(source)) {
        if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
        // Object.getOwnPropertyDescriptor 返回指定对象上一个自有属性对应的属性描述符。
        // 自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性
        // 属性描述符指的是configurable、enumerable、writable、value这些
        const desc = Object.getOwnPropertyDescriptor(source, key)
        Object.defineProperty(target, key, desc)
        }
    }
}

// mixin
// 多重继承 一个子类继承多个父类
// class Other extends mixin(A, P) {}
export default function mixin(...mixins) {
    class Mix {
      constructor() {
        for(let mixin of mixins) {
          // 拷贝实例属性
          copyProperties(this, new mixin())
        }
      }
    }
    for(let mixin of mixins) {
      copyProperties(Mix, mixin) // 拷贝静态属性
      copyProperties(Mix.prototype, mixin.prototype) // 拷贝原型属性
    }
    return Mix
}