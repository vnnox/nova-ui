# Select 选择器

## 使用和示例

### 基础用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <h5 class="doc-row__title">默认</h5>
    <p class="doc-row__describe"></p>
    <div class="doc-row__body">
      <nv-select v-model="value" :options="options"></nv-select>
      <!-- <nv-select v-model="value2" clearable>
        <nv-option v-for="option in options" :key="option.value" :value="option.value">{{option.label}}</nv-option>
      </nv-select>   -->
    </div>
  </div>
</template>  
<script>
 var options = [{
    value: '0086',
    label: '中国'
  }, {
    value: '001',
    label: '加拿大'
  }, {
    value: '0049',
    label: '德国'
  }, {
    value: '00853',
    label: '澳门'
  }, {
    value: '0052',
    label: '墨西哥'
  }]

  export default {
    data () {
      return {
        options,
        value: '081',
        value2: '00853'
      }
    },
    watch: {
      value () {
        console.log(this.value)
      }
    },
    mounted () {
      setTimeout(() => {
        this.options.push({
          value: '081',
          label: '日本'
        })
      }, 2000)
    }
  }
</script>  
```
:::

> Select组件可以有Select组件通过传递Options选项单独使用，也可以配合Option组件一起使用。Option组件不能单独使用

## Api

### Props

同`Native Options`