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
          <h5>输入框只读</h5>
          <nv-date-picker v-model="value2" placeholder="请选择日期" readonly></nv-date-picker>
        </div> 
        <div class="doc-cell">
          <h5>可清空</h5>
          <nv-date-picker v-model="value3" placeholder="请选择日期" clearable @change="change"></nv-date-picker>
        </div>
        <div class="doc-cell">
          <h5>显示按钮</h5>
          <nv-date-picker v-model="value4" placeholder="请选择日期" today confirm @done="done"></nv-date-picker>
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
      },
    },
  }
</script>  
```
:::

### 禁用和有效日期
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <div class="doc-cells">
        <div class="doc-cell">
          <h5>禁用</h5>
          <nv-date-picker v-model="value1" placeholder="请选择日期" :disabled="!enable"></nv-date-picker>
          <nv-switch v-model="enable">启用</nv-switch>
        </div>
        <div class="doc-cell">
          <h5>min/max</h5>
          <nv-date-picker v-model="value2" placeholder="请选择日期" min="2018-02-05" max="2019-04-25"></nv-date-picker>
        </div>
        <div class="doc-cell">
          <h5>disabledDate</h5>
          <nv-date-picker v-model="value3" placeholder="请选择日期" :disabled-date="disabledDate" ></nv-date-picker>
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
        enable: false
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


### 多选日期
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body" style="max-width:640px;">
      <h5>Normal</h5>
      <nv-date-picker v-model="value2" placeholder="请选择日期" multiple></nv-date-picker>
      <br/>
      <br/>
      <h5>禁用</h5>
      <nv-date-picker v-model="value1" placeholder="请选择日期" :disabled="!enable" multiple></nv-date-picker>
      <nv-switch v-model="enable">启用</nv-switch>
      <br/>
      <br/>
      <h5>最多可选日期个数</h5>
      <nv-date-picker v-model="value3" placeholder="请选择日期"  multiple :max-multiple-count="5" @done="done"></nv-date-picker>
      <br/>
      <br/>
      <h5>可清除</h5>
      <nv-date-picker v-model="value4" placeholder="请选择日期"  multiple clearable></nv-date-picker>
      <br/>
      <br/>
      <h5>Tag模式</h5>
      <nv-date-picker v-model="value5" placeholder="请选择日期" tag multiple></nv-date-picker>
      <br/>
      <br/>
      <h5>Tag模式可移除单个选项</h5>
      <nv-date-picker v-model="value6" placeholder="请选择日期" tag multiple removeable></nv-date-picker>
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
        value3: ['2019-04-01'],
        value4: date,
        value5: date,
        value6: date,
        enable: false
      }
    },
    mounted () {
      setTimeout(() => {
        this.value3 = ['2019-04-04', '2019-04-05']
      }, 2000)
    },
    methods: {
      done (val) {
        console.log(val)
      }
    },
  }
</script> 
```
:::


## API

  
### Props 

> 与原生属性相比，Vue ColorPicker组件缺省了`inline`配置项，增加了如下配置：

| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| `placeholder` | 输入框占位符 | string | -- |
| `readonly` | 输入框只读 | boolean | false |
| `clearable` | 显示清空按钮 | boolean | false |
| `name` | 输入框名称 | string | -- |
| `tag` | 多选使用tag模式 | boolean | false |
| `removeable` | 多选使用tag模式时可移除 | boolean | false |

其他同 `Native Options`

### Events

同 Native