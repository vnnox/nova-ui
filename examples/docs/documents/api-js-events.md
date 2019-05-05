# Javascript 事件基类

> 核心类库。基本每个组件都会继承`Event`类。`Event`类是一个发布订阅器，为组建提供了发布和订阅事件的可能。

```javascript
import Event '@vnnox/novaui/src/utils/events'
```

### 使用
```javascript
class SomeClass extends Event {
  constructor () {
    super()
  }

  init () {
    this.emit('someEvent', someData)
  }

  destroy () {
    // 注意在组件内部的destroy方法中调用父类的destroy
    super.destroy()
  }

}

const instance = new SomeClass()

const handler = data => {}
// 订阅事件
instance.on('someEvent', handler)
// 解除事件订阅
instance.off('someEvent', handler)

```

### 方法

- `on` 注册事件
```javascript
this.on(name:string, handle:Function, context?:context)
```

- `one` 绑定一次性事件,该事件只会被绑定一次
```javascript
this.one(name:string, handle:Function, context?:context)
```

- `off` 解绑事件绑定
```javascript
// 如果不指定handle,将会解除所有同名事件
this.off(name:string, handle?:Function, context?:context)
```

- `emit` 触发事件
```javascript
this.emit(name:string, ...args)
```
