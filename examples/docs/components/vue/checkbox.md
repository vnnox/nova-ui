# Checkbox 复选框

## 使用和示例

### 基础用法
:::vue-demo
```html
<template>
  <div>
    <nv-checkbox name="demo-vue" :label="2" v-model="value">可用</nv-checkbox>
    <nv-checkbox name="demo-vue" :label="2" v-model="value2" disabled>禁用</nv-checkbox>
    <nv-checkbox name="demo-vue" :label="2" v-model="value3"><span slot="before">文字在前，图标在后</span></nv-checkbox>
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        value: true,
        value2: true,
        value3: true
      }
    }
  }
</script>  
```
:::


### 多选框组
:::vue-demo
```html
<template>
  <div>
    <nv-checkbox name="demo-vue" v-for="option in options" :key="option" :label="option" v-model="value">{{option}}</nv-checkbox>
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        value: ['西安'],
        options: ['成都', '北京', '西安', '杭州']
      }
    }
  }
</script>  
```
:::


### 复选按钮组
:::vue-demo
```html
<template>
  <div>
    <div class="doc-row">
      <h5 class="doc-row__title">默认样式</h5>
      <div class="doc-row__body">
        <nv-checkbox-group name="demo-checkbox-group" v-model="value1">
          <nv-checkbox-item v-for="option in options" :key="option" :label="option">{{option}}</nv-checkbox-item>
        </nv-checkbox-group>
      </div>  
    </div>
    <div class="doc-row">
      <h5 class="doc-row__title">应用主要样式</h5>
      <div class="doc-row__body">
        <nv-checkbox-group name="demo-checkbox-group" v-model="value2" type="primary">
          <nv-checkbox-item v-for="option in options" :key="option" :label="option">{{option}}</nv-checkbox-item>
        </nv-checkbox-group>
      </div>  
    </div>
    <div class="doc-row">
      <h5 class="doc-row__title">小尺寸</h5>
      <div class="doc-row__body">
        <nv-checkbox-group name="demo-checkbox-group" v-model="value3" size="small">
          <nv-checkbox-item v-for="option in options" :key="option" :label="option">{{option}}</nv-checkbox-item>
        </nv-checkbox-group>
      </div>  
    </div>
    <div class="doc-row">
      <h5 class="doc-row__title">禁用</h5>
      <div class="doc-row__body">
        <nv-checkbox-group name="demo-checkbox-group" v-model="value4" size="small" type="primary">
          <nv-checkbox-item label="周日" disabled>放假</nv-checkbox-item>
          <nv-checkbox-item label="周一">周一</nv-checkbox-item>
          <nv-checkbox-item label="周二">周二</nv-checkbox-item>
          <nv-checkbox-item label="周三">周三</nv-checkbox-item>
          <nv-checkbox-item label="周四">周四</nv-checkbox-item>
          <nv-checkbox-item label="周五">周五</nv-checkbox-item>
          <nv-checkbox-item label="周六">周六</nv-checkbox-item>
        </nv-checkbox-group>
      </div>  
    </div> 
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        value1: [],
        value2: [],
        value3: [],
        value4: ['周二', '周四'],
        options: ['成都', '北京', '西安', '杭州']
      }
    }
  }
</script>  
```
:::


## API

### Checkbox Props

| Prop  |  Description  | Type | Default Values |
|---|---|---|---|
| `value`  |  绑定值 | boolean/array | --  |
| `label`  | Checkbox 的 value值  | <string/number/boolean>  |  -- |
| `name`  | 原生 name 属性  | string  | -- |
| `disabled`  |  是否禁用 |  boolean | false  |


### Checkbox Events

| Event  |  Description  | Arguments |
|---|---|---|
| `change`  |  绑定值变化时触发的事件 | 更新后的值) |


### Checkbox Group Props

| Prop  |  Description  | Type | Default Values |
|---|---|---|---|
| `value`  |  绑定值 | boolean/array | --  |
| `name`  | 原生 name 属性, 将覆盖Checkbox的name属性  | string  | -- |
| `size`  |  尺寸 |  string<`default/small`> | default  |
| `type`  |  类型 |  string<`default/primary`> | default  |


### Checkbox-group Events

| Event  |  Description  | Arguments |
|---|---|---|
| `change`  |  绑定值变化时触发的事件 | 更新后的值 |