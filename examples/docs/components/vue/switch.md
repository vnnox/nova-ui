# Switch 开关

### 基础用法

:::vue-demo
```html
<template>
  <div>
    <nv-switch name="demo-vue" :label="true" v-model="value">可用</nv-switch>
    <nv-switch name="demo-vue" :label="false" v-model="value2" disabled>禁用</nv-switch>
    <nv-switch name="demo-vue" :label="false" v-model="value3"><span slot="before">文字在前，图标在后</span></nv-switch>
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