# DatePicker 日期选择器

## 使用和示例


### 基础用法

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <div class="doc-cells">
        <div class="doc-cell">
          <h5>以 [日] 为单位</h5>
          <nv-date-picker v-model="value1" placeholder="请选择日期"></nv-date-picker>
        </div>
        <div class="doc-cell">
          <h5>以 [年] 为单位</h5>
          <nv-date-picker v-model="value2" placeholder="请选择日期" mode="year" format="YYYY年"></nv-date-picker>
        </div> 
        <div class="doc-cell">
          <h5>以 [月] 为单位</h5>
          <nv-date-picker v-model="value3" placeholder="请选择日期" mode="month" format="YYYY-MM"></nv-date-picker>
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
        value3: date,
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
          <h5>禁用</h5>
          <nv-date-picker v-model="value1" placeholder="请选择日期" disabled></nv-date-picker>
        </div>
        <div class="doc-cell">
          <h5>输入框只读</h5>
          <nv-date-picker v-model="value2" placeholder="请选择日期" readonly></nv-date-picker>
        </div> 
        <div class="doc-cell">
          <h5>可清空</h5>
          <nv-date-picker v-model="value3" placeholder="请选择日期" clearable></nv-date-picker>
        </div>
        <div class="doc-cell">
          <h5>显示按钮</h5>
          <nv-date-picker v-model="value4" placeholder="请选择日期" today confirm></nv-date-picker>
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
        value3: date,
        value4: date,
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
      <div class="doc-cells">
        <div class="doc-cell">
          <h5>min/max</h5>
          <nv-date-picker v-model="value1" placeholder="请选择日期" min="2018-02-05" max="2019-04-25"></nv-date-picker>
        </div>
        <div class="doc-cell">
          <h5>disabledDate</h5>
          <nv-date-picker v-model="value2" placeholder="请选择日期" :disabled-date="disabledDate"></nv-date-picker>
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
    },
    methods: {
      disabledDate(date) {
         return date.getTime() < (Date.now() - 86400)
      }
    }
  }
</script> 
```
:::


## API

  
### Options 

> 与原生属性相比，Vue ColorPicker组件缺省了`inline`配置项，增加了如下配置：

| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| `placeholder` | 输入框占位符 | string | -- |
| `readonly` | 输入框只读 | boolean | false |
| `clearable` | 显示清空按钮 | boolean | false |
| `name` | 输入框名称 | string | -- |

### Events

同 Native