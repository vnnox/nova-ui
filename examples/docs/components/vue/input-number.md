# InputNumber 计数器

## 使用和示例

### 基础用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <h5 class="doc-row__title">基本使用</h5>
    <div class="doc-row__body">
      <nv-input-number v-model="value1"></nv-input-number>
      <nv-input-number v-model="value2" :min="10" :step="0.5"></nv-input-number>
      <nv-input-number v-model="value3" disabled></nv-input-number>
      <nv-input-number v-model="value4" :min="10" :step="0.05" max="100" custom-class="nv-input-number--row"></nv-input-number>
    </div>
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        value1: 1,
        value2: 10.50,
        value3: 20,
        value4: 48
      }
    }
  }
</script>  
```
:::

### 格式化
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-input-number v-model="value1" min="0" max="100" :formatter="formatter1"></nv-input-number>
      <nv-input-number v-model="value2" :min="10" :step="0.05" max="100" :formatter="formatter2"></nv-input-number>
    </div>
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        value1: 10,
        value2: 10.50,
      }
    },
    methods: {
      formatter1 (val) {
        return (val === '') ? '' : (val + '%')
      },
      formatter2 (val) {
        return (val === '') ? '' : ('$ ' + val)
      }
    }
  }
</script>  
```
:::

## API

### Props

同 `Native Options`

### Events

| Event  | Description | Parameters |
| ----------- | ----------- | ----------- |
| change | 当值改变时触发 | (value, oldValue) |