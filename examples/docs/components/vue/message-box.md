# MessageBox 弹框

## 使用和示例

> `$alert`/`$confirm`是挂载在Vue原型上的对象，可以直接调用。


### 基础用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <h5 class="doc-row__title">Alert</h5>
    <div class="doc-row__body">
      <button type="button" class="nv-btn" @click="m1">默认</button>
      <button type="button" class="nv-btn" @click="m2">自定义按钮</button>
      <button type="button" class="nv-btn" @click="m3">成功</button>
      <button type="button" class="nv-btn" @click="m4">失败</button>
      <button type="button" class="nv-btn" @click="m5">警告</button>
    </div>  
  </div>
</template>  
<script>
  export default {
    methods: {
      m1() {
        this.$alert('我是一条消息提示', '警告')
      },
      m2() {
        this.$alert('我是一条消息提示', '警告', {
          confirmButtonText: '知道了',
          confirmButtonCss: ''
        })
      },
      m3() {
        this.$alert('我是一条消息提示', '警告', {
          type: 'success',
        })
      },
      m4() {
        this.$alert('我是一条消息提示', '警告', {
          type: 'error'
        })
      },
      m5() {
        this.$alert('我是一条消息提示', '警告', {
          type: 'warning'
        })
      }
    },
  }
</script>  
```
:::

### 基础用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <h5 class="doc-row__title">Confirm</h5>
    <div class="doc-row__body">
      <button type="button" class="nv-btn" @click="m1">默认</button>
      <button type="button" class="nv-btn" @click="m2">有描述</button>
      <button type="button" class="nv-btn" @click="m3">使用HTML</button>
    </div>  
  </div>
</template>  
<script>
  export default {
    methods: {
      m1() {
        this.$confirm('是否要删除该播放器吗？', '确认')
      },
      m2() {
        this.$confirm('是否要删除该播放器吗？', '确认', {
          describe: '该播放器已关联 <a>3个License</a>，删除后将自动释放。由于默认没有开启asHtml选项，这里的富文本被当做纯文本渲染。',
        })
      },
      m3() {
        this.$confirm('是否要删除该播放器<em> 同步 </em>吗？', '确认', {
          describe: '该播放器已关联 <a>3个License</a>，删除后将自动释放',
          type: 'warning',
          asHtml: true
        })
      },
    },
  }
</script>  
```
:::


## API

### Options

| 属性名  |  描述  | 类型 | 默认值 |
|---|---|---|---|
| `message`|  消息文本 | string | -- |
| `title`|  标题 | string | -- |
| `describe`|  附加描述信息，作为消息的一部分 | string | -- |
| `asHtml`|  `message`和`describe`是否当做HTML渲染 | boolean | false |
| `type`|  类型 | string`<info/success/error/warning>` | `info` |
| `showIcon`|  显示显示图标 | boolean | true |
| `icon`|  自定义图标类名 | string | 根据当前type自动获取 |
| `confirmButtonText`|  确认按钮文本 | string | 确定 |
| `cancelButtonText`|  取消按钮文本 | string | 取消 |
| `confirmButtonCss`|  确认按钮附加样式 | string | `nv-btn--primary` |
| `cancelButtonCss`|  取消按钮附加样式 | string | -- |
| `confirm`|  确认事件回调, 当`return false`时模态框不关闭 | function | -- |
| `cancel`|  取消事件回调,当`return false`时模态框不关闭 | function | -- |
| `backdrop`|  显示遮罩层 | boolean | true |
| `backdropBackground`|  遮罩层背景色 | string | `rgba(0,0,0,.5)` |
| `backdropClose`|  点击遮罩层关闭 | boolean | true |
| `escClose`|  按Esc键关闭 | boolean | true |
| `width`|  模态框宽度 | number/string | -- |
| `top`|  距离顶部高度 | number/string | `10%` |
| `scrollLock`|  是否锁屏 | boolean | true |

