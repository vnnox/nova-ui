# Progress 进度

## 使用和示例

### 基础用法

:::vue-demo
```html
<template>
  <div class="doc-row">
    <p class="doc-row__describe">线形进度条</p>
    <div class="doc-row__body">
      <nv-progress v-model="value1"></nv-progress>
      <hr class="nv-hr">
      <nv-progress v-model="value2" status="success"></nv-progress>
      <hr class="nv-hr">
      <nv-progress v-model="value3" status="fail"></nv-progress>
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        value1: 42,
        value2: 81,
        value3: 26,
      }
    }
  }
</script>  
```
:::

### 动态设置Value

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-progress v-model="value" :status="status" :show-label="false"></nv-progress>
      <br/>
      <nv-input-number v-model="value" min="0" max="100" step="1"></nv-input-number>
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        value: 42,
      }
    },
    computed: {
      status () {
        if (this.value < 20) {
          return 'fail'
        }
        if (this.value > 80) {
          return 'success'
        }
        return 'running'
      }
    },
  }
</script>  
```
:::




## API

### Options
同 Native

### Methods
同 Native

