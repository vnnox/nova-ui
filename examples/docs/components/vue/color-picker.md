# ColorPicker 调色板

## 使用和示例


### 基础用法

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <h5>Select Mode</h5>
      <nv-color-picker v-model="value1"></nv-color-picker>
      <hr class="nv-hr" />
      <h5>Lump Mode</h5>
      <nv-color-picker v-model="value2" mode="lump"></nv-color-picker>
      <nv-color-picker v-model="value3" mode="lump">
        <span style="display: inline-block; vertical-align: middle; margin-left:5px;">预留插槽</span>
      </nv-color-picker>
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        value1: '#d81e06',
        value2: '#24a32f',
        value3: '#43a3fb'
      }
    }
  }
</script>  
```
:::

### 显示最近使用

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-color-picker v-model="value1" :recently-colors="['#2c2c2c', '#d81e06']" @palette-change="paletteChange" ref="colorPicker"></nv-color-picker>
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        value1: '#2c2c2c',
      }
    },
    methods: {
      paletteChange (color) {
        // todo 存储到本地
        this.$refs.colorPicker.addRecentlyColor(color)
      }
    }
  }
</script>  
```
:::



### 禁用

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <h5>Select Mode</h5>
      <nv-color-picker v-model="value1" disabled></nv-color-picker>
      <hr class="nv-hr" />
      <h5>Lump Mode</h5>
      <nv-color-picker v-model="value2" mode="lump" disabled></nv-color-picker>
      <nv-color-picker v-model="value3" mode="lump" disabled>
        <span style="display: inline-block; vertical-align: middle; margin-left:5px;">预留插槽</span>
      </nv-color-picker>
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        value1: '#be8dbd',
        value2: '#aad08f',
        value3: '#43a3fb'
      }
    }
  }
</script>  
```
:::


## API

### Slots
| Slot Name | Description |
| ----------- | ----------- | 
| default | 默认插槽，仅对mode为`lump`的模式有效 | 

 
### Options 

> 与原生属性相比，Vue ColorPicker组件<mark>增加了mode配置项</mark>，`mode`提供两个选项，一个是select模式（表现为选择器，可输入），一个是lump模式（表现为色块）。

| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| `mode` | 选择器模式 | string`<select:选择器模式/lump:色块模式>` | `select` |

### Methods

| 方法名  |  描述  | 参数 |
|---|---|---|
| `addRecentlyColor` | 增加最近使用色 | (colro<string/array>) |



### Events

| Event Name  | Description | Parameters |
| ----------- | ----------- | ----------- |
| open | 打开弹框时触发 | (PickerInstance) |
| close | 关闭弹框时触发 | (PickerInstance) |
| change | 当值改变时触发| (value, oldValue) |
| paletteChange | 当调色器上的颜色改变后触发 | (value, event) |