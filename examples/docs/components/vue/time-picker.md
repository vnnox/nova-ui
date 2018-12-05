# TimePicker 时间选择器

## 使用和示例

### 基础用法

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <div class="doc-cells">
        <div class="doc-cell">
          <h5>默认</h5>
          <nv-time-picker v-model="value1" placeholder="请选择时间"></nv-time-picker>
        </div>
        <div class="doc-cell">
          <h5>时分</h5>
          <nv-time-picker v-model="value2" placeholder="请选择时间" format="HH:ss"></nv-time-picker>
        </div> 
      </div>  
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      let date = new Date()
      return {
        value1: date,
        value2: date,
      }
    }
  }
</script>  
```
:::


### 其他配置

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <div class="doc-cells">
        <div class="doc-cell">
          <h5>输入框只读</h5>
          <nv-time-picker v-model="value2" placeholder="请选择时间" readonly></nv-time-picker>
        </div> 
        <div class="doc-cell">
          <h5>可清空</h5>
          <nv-time-picker v-model="value3" placeholder="请选择时间" clearable @change="change"></nv-time-picker>
        </div>
        <div class="doc-cell">
          <h5>显示按钮</h5>
          <nv-time-picker v-model="value4" placeholder="请选择时间" cancel confirm @done="done"></nv-time-picker>
        </div>
      </div>  
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      let date = new Date()
      return {
        value2: date,
        value3: date,
        value4: date,
      }
    },
    methods: {
      change (formatValue, value) {
        console.log(formatValue, value)
      },
      done (formatValue, value) {
        console.log(formatValue, value)
      }
    }
  }
</script>  
```
:::

### 禁用和受限制

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <div class="doc-cells">
        <div class="doc-cell">
          <h5>禁用</h5>
          <nv-time-picker v-model="value1" placeholder="请选择时间" :disabled="!enable"></nv-time-picker>
          <nv-switch v-model="enable">启用</nv-switch>
        </div>
        <div class="doc-cell">
          <h5>minTime/MaxTime</h5>
          <nv-time-picker v-model="value2" placeholder="请选择时间" min-time="12:30:00" max-time="16:20:30"></nv-time-picker>
        </div> 
      </div>  
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      let date = new Date()
      return {
        value1: date,
        value2: date,
        enable: false
      }
    }
  }
</script> 
```
:::


## API

  
### Options 

> 与原生属性相比，Vue TimePicker组件增加了如下配置：

| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| `placeholder` | 输入框占位符 | string | -- |
| `readonly` | 输入框只读 | boolean | false |
| `clearable` | 显示清空按钮 | boolean | false |
| `name` | 输入框名称 | string | -- |

### Events

同 Native