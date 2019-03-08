# Modal 模态框

## 使用和示例

### 基础用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <button type="button" class="nv-btn" @click="visible=true">打开模态框</button>
      <button type="button" class="nv-btn" @click="visible2=true">打开模态框</button>
      <nv-modal :title="modalTitle" v-model="visible">
        这里是模态框内容
        <template slot="btns">
          <button type="button" class="nv-btn nv-btn--primary" @click="confirm">Confirm</button>
          <button type="button" class="nv-btn" @click="visible=false">Cancel</button>
        </template>  
      </nv-modal>  
      <nv-modal title="Modal" v-model="visible2">
        这里是模态框内容
        <template slot="foot">
          <nv-checkbox style="vertical-align: top;">不在提醒</nv-checkbox>
        </template>  
        <template slot="btns">
          <button type="button" class="nv-btn nv-btn--primary"  @click="visible2=false">Confirm</button>
          <button type="button" class="nv-btn" @click="visible2=false">Cancel</button>
        </template>  
      </nv-modal>  
    </div>
  </div>  
</template>
<script>
  export default {
    data () {
      return {
        visible: false,
        visible2: false,
        modalTitle: 'title 1'
      }
    },
    methods: {
      confirm () {
        alert ('Confirm')
        this.visible = false
      }
    },
    mounted () {
     
    },
    watch: {
      visible(val) {
        if (val) {
          setTimeout(() => {
            this.modalTitle = 'title open'
          }, 2000)
        }
      }
    }
  }
</script>  
```
:::

## API

### Attributes

| 属性名  |  描述  | 类型 | 默认值 |
|---|---|---|---|
| `value` | 默认是否打开 | boolean |  false |
| `title` | 标题 | string/boolean | -- |
| `backdrop`|  显示遮罩层 | boolean | true |
| `backdropBackground`|  遮罩层背景色 | string | `rgba(0,0,0,.5)` |
| `backdropClose`|  点击遮罩层关闭 | boolean | true |
| `escClose`|  按Esc键关闭 | boolean | true |
| `width`|  模态框宽度 | number/string | -- |
| `top`|  距离顶部高度 | number/string | `10%` |
| `customClass`|  自定义样式，多个样式使用`,`隔开 | string | -- |
| `scrollLock`|  是否锁屏 | boolean | true |

### Slots

| 插槽名  |  描述  | 示例 |
|---|---|---|---|
| `default` | 内容插槽 | ... |
| `foot` | 额外的页脚插槽，同按钮组同级 | `<template slot="foot">不在提示</template>` |
| `btns`|  按钮组插槽 | `<template slot="btns">...</template>` |


### Methods

| 方法名  |  描述  | 参数 |
|---|---|---|
| `open` | 打开模态框 | -- |
| `close` | 关闭模态框 | (type?:string) |


### Events

| 事件名  |  描述  | 参数 |
|---|---|---|
| `open` | 模态框打开时回调 | ($el:HTMLElement) |
| `close` | 模态框关闭时回调 | (type:string, $el:HTMLElement) |