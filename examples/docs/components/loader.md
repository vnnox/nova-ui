# Loader 加载

## 使用和示例

### 基础用法
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">默认</h5>
  <div class="doc-row__body doc-skeleton" id="ins1" style="height:180px;"></div>  
</div>
<hr class="nv-hr" />
<div class="doc-row">
  <h5 class="doc-row__title">自定义</h5>
  <div class="doc-row__body doc-skeleton" id="ins2" style="height:200px;"></div>  
</div>
<script>
  var ins1 = new Nova.Loader(document.getElementById('ins1'), {})
  var ins2 = new Nova.Loader(document.getElementById('ins2'), {
    vertical: true,
    background: 'rgba(0,0,0,.8)',
    label: '加载中，请稍后...'
  })
</script>  
```
:::

### 全局Loader
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <button class="nv-btn nv-btn--primary" id="loading">Loading</button>
  </div>  
</div>

<script>
  document.getElementById('loading').onclick = function () {
    var ins1 = new Nova.Loader(document.body, {
      lock: true
    })
    setTimeout(function() {
      ins1.close()
    }, 3000)
  }
</script>  
```
:::


## API

### Options

| 属性名  |  描述  | 类型 | 默认值 |
|---|---|---|---|
| `background`|  背景色 | string | `rgba(255,255,255,.8)` |
| `lock`|  是否锁屏,禁止父容器滚动 | boolean | true |
| `label`|  loading文本 | string |  loading...|
| `customClass`|  自定义样式 | string | -- |
| `vertical`|  文本和图标垂直居中 | boolean | false |


### Instance Methods

| 方法名  |  描述  | 参数 |
|---|---|---|
| `close` | 关闭并销毁当前实例 | -- |

### Static Methods 

| 方法名  |  描述  | 参数 |
|---|---|---|
| `destroy` | 销毁页面上所有的实例 | -- |

