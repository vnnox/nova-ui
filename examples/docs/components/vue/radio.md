# Radio 单选框

### 基础用法

:::vue-demo
```html
<template>
  <div>
    <nv-radio name="demo-vue" v-for="option in options" :key="option.value" :label="option.value" :disabled="option.disabled" v-model="value">
      {{option.label}}
    </nv-radio>
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        value: 2,
        options: [
          {
            value: 1,
            label: '选项一'
          },
          {
            value: 2,
            label: '选项二'
          },
          {
            value: 3,
            label: '选项三(禁用)',
            disabled: true
          },
          {
            value: 4,
            label: '选项四'
          },
          {
            value: 5,
            label: '选项五'
          },
        ]
      }
    }
  }
</script>  
```
:::


### 单选按钮组

:::vue-demo
```html
<template>
  <div>
    <div class="doc-row">
      <h5 class="doc-row__title">默认样式</h5>
      <div class="doc-row__body">
        <nv-radio-group name="demo-radio-group" v-model="value1">
          <nv-radio-item v-for="option in options" :key="option.value" :label="option.value" :disabled="option.disabled">
            {{option.label}}
          </nv-radio-item>
        </nv-radio-group>
      </div>  
    </div>
    <div class="doc-row">
      <h5 class="doc-row__title">应用主要样式</h5>
      <div class="doc-row__body">
        <nv-radio-group name="demo-radio-group-primary" v-model="value2" type="primary">
          <nv-radio-item v-for="option in options" :key="option.value" :label="option.value" :disabled="option.disabled">
            {{option.label}}
          </nv-radio-item>
        </nv-radio-group>
      </div>  
    </div>
    <div class="doc-row">
      <h5 class="doc-row__title">小尺寸</h5>
      <div class="doc-row__body">
        <nv-radio-group name="demo-radio-group-small" v-model="value3" size="small">
          <nv-radio-item v-for="option in options" :key="option.value" :label="option.value" :disabled="option.disabled">
            {{option.label}}
          </nv-radio-item>
        </nv-radio-group>
      </div>  
    </div> 
    
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        value1: 1,
        value2: 1,
        value3: 1,
        options: [
          {
            value: 1,
            label: '选项一'
          },
          {
            value: 2,
            label: '选项二'
          },
          {
            value: 3,
            label: '选项三'
          },
          {
            value: 4,
            label: '选项四'
          },
          {
            value: 5,
            label: '选项五'
          },
        ]
      }
    }
  }
</script>  
```
:::