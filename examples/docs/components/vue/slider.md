# Slider 滑块

### 基础用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <h5 class="doc-row__title">基本使用</h5>
    <div class="doc-row__body">
      <h6>自定义初始值</h6>
      <nv-slider v-model="value"></nv-slider>
      <hr class="nv-hr" />
      <h6>格式化 Tooltip</h6>
      <nv-slider v-model="value2" :step="0.5" :tip-formatter="formatterTip"></nv-slider>
      <hr class="nv-hr" />
      <h6>禁用</h6>
      <nv-slider v-model="value3" disabled></nv-slider>
      <hr class="nv-hr" />
    </div>
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        value: 10,
        value2: 50,
        value3: 10
      }
    },
    methods: {
      formatterTip (value) {
        return value + '%'
      }
    },
  }
</script>  
```
:::


### 与InputNumber连用
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <h6>默认</h6>
      <nv-slider v-model="value" class="show-input">
        <div class="nv-slider__input">
          <nv-input-number v-model="value" width="85" :min="0" :max="100"></nv-input-number>
        </div>  
      </nv-slider>  
      <h6>格式化</h6>
      <nv-slider v-model="value3" class="show-input" :tip-formatter="formatter">
        <div class="nv-slider__input">
          <nv-input-number v-model="value3" width="85" :formatter="formatter" :min="0" :max="100"></nv-input-number>
        </div>  
      </nv-slider>   
      <h6>自定义输入框样式</h6>
      <nv-slider v-model="value2" class="show-input">
        <div class="nv-slider__input">
          <nv-input-number v-model="value2" width="125" custom-class="nv-input-number--row" :min="0" :max="100"></nv-input-number>
        </div>  
      </nv-slider> 
    </div>
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        value: 10,
        value2: 50,
        value3: 10
      }
    },
    methods: {
      formatter (value) {
        return value + '%'
      }
    },
  }
</script>  
```
:::