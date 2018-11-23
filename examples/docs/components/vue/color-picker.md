# ColorPicker 调色板

## 使用和示例


### 基础用法

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-color-picker v-model="value1"></nv-color-picker>
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        value1: '#d81e06',
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
      <nv-color-picker v-model="value1" disabled></nv-color-picker>
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        value1: '#be8dbd',
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

 
### Options 

同 native
