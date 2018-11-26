# Loader 加载

## 使用和示例
> `loader`是挂载在Vue指令集上的一个自定义指令。使用时可以直接通过指令`v-loader`的方式来调用。
`$loader`是一个挂载在Vue原型上的方法，通过`this.$loader(options)`也可以创建一个`Loader`，并且返回了一个`Loader`实例。


### 基础用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <div class="doc-row__body doc-skeleton" style="height:180px;" v-loader="loading"></div>
    </div>
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        loading: true
      }
    }
  }
</script>  
```
:::

### 自定义
:::vue-demo
```html
<template>
  <div class="doc-row">
    <p class="doc-row__describe">通过指令修饰符<code>modifiers</code>可以设置<code>vertical/fullscreen/lock</code>，配合自定义属性<code>data-loader-[label/css/backdround]></code>可以设置其他配置项</p>
    <div class="doc-row__body">
      <div class="doc-row__body doc-skeleton" style="height:180px;" 
        v-loader.vertical="loading" 
        data-loader-label="加载中，请稍后..." 
        data-loader-background="rgba(0,0,0,.8)">
      </div>
    </div>
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        loading: true
      }
    }
  }
</script>  
```
:::

### 全屏模式
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body" v-loader.fullscreen.lock="loading">
      <button type="button" class="nv-btn nv-btn--primary" @click="loader">指令模式</button>
      <button type="button" class="nv-btn nv-btn--primary" @click="loader2">服务模式</button>
    </div>
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        loading: false
      }
    },
    methods: {
      loader () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 2000)
      },
      loader2 () {
        const loading = this.$loader({
          lock: false,
          label: 'Loading',
          background: 'rgba(0, 0, 0, .8)',
          vertical: true
        })
        setTimeout(() => {
          loading.close()
        }, 2000)
      }
    }
  }
</script>  
```
:::


## API

### Modifiers
| Modifiers | Description |
| ----------- | ----------- | 
| fullscreen | 挂载在`body`上 | 
| lock | 禁止父容器滚动 |  
| vertical | 垂直模式 | 

### Html Attributes
| Attributes | Description |
| ----------- | ----------- | 
| data-loader-label | 自定义loader文本 | 
| data-loader-css | 自定义loader样式 |  
| data-loader-background | 自定义loader背景色 | 



### Options 

同`Native`, 增加了`target`配置项，用来指定父容器，缺省值为`document.body`。 如

```javascript
this.$loader({
  lock: true,
  label: 'Loading',
  background: 'rgba(0, 0, 0, .8)',
  vertical: true,
  target: document.body
})
```

