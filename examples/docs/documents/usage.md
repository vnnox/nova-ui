# Usage 使用

### 在普通HTML页面中引用

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="/libs/nova.css">
<!-- 引入组件库 -->
<!-- 支持umd -->
<script src="/libs/nova.js"></script>
```

### 在VUE框架中使用

```javascript
import Vue from 'vue'
// 加载样式
import '@vnnox/novaui/libs/nova.css'
// 加载ui组件库
import NovaUI from '@vnnox/novaui/libs/nova-vue.js'

Vue.use(NovaUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```


