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

### 显示清空按钮

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-color-picker v-model="value1" clearable></nv-color-picker>
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        value1: '#2c2c2c',
      }
    }
  }
</script>  
```
:::


### 自定义色块

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-color-picker v-model="value1" :lumps="lumps"></nv-color-picker>
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        value1: '#e0620d',
        lumps: [
          '707070', '515151', '2c2c2c', '000000', 'ea986c', 'eeb174', 'f3ca7e', 'f9f28b', 'c8db8c', 'aad08f', '87c38f', '83c6c2', '7dc5eb', '87a7d6', '8992c8', 'a686ba', 
        ]
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

> 与原生属性相比，Vue ColorPicker组件缺省了`showInput`配置项，<mark>增加了mode配置项</mark>，`mode`提供两个选项，一个是select模式（表现为选择器，可输入），一个是lump模式（表现为色块）。

| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| `mode` | 选择器模式 | string`<select:选择器模式/lump:色块模式>` | `select` |
| lang | 当前语言 | string | `zh-CN`|
| value | 当前绑定值 | string | -- |
| lumps | 快捷色块 | array<color>  | ['#d81e06',...,'#d6204b'] |
| clearable | 显示清空按钮 | boolean | false |
| align | picker相对target的位置 | string`<left,center,right>` | `left` |
| disabled | 是否禁用组件 | boolean | false |
| customClass | 自定义样式名称，多样式以逗号`,`分隔 | string | -- |

### Events

| Event Name  | Description | Parameters |
| ----------- | ----------- | ----------- |
| open | 打开弹框时触发 | (PickerInstance) |
| close | 关闭弹框时触发 | (PickerInstance) |
| change | 当调色面板上的值改变时触发，此时绑定至不会改变 | (value, oldValue, initValue) |
| done | 点击确定按钮时触发，此时绑定值被改变| (value, oldValue) |