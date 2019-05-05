# Alert 模态框

## 使用和示例

### 基础用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-alert content="我通过属性传递内容" type="info"></nv-alert>
      <nv-alert type="info">我通过插槽传递内容</nv-alert>
      <nv-alert content="我通过属性传递内容" type="success"></nv-alert>
      <nv-alert content="我通过属性传递内容" type="error"></nv-alert>
      <nv-alert content="我通过属性传递内容" type="warning"></nv-alert>
      <hr class="nv-hr">
      <nv-alert content="不显示关闭按钮" :closable="false"></nv-alert>
    </div>  
  </div>
</template>
<script>
  export default {}
</script> 
```
:::

### 高级用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-alert type="info" content="不显示关闭按钮" :closable="false"></nv-alert>
      <nv-alert type="info" content="不显示图标" :show-icon="false"></nv-alert>
      <nv-alert type="info" content="自定义图标" custom-icon="nv-icon-cart"></nv-alert>
      <nv-alert type="info" content="自定义关闭按钮" close-label="我知道了"></nv-alert>
    </div>  
  </div>
</template>
<script>
  export default {}
</script> 
```
:::

## API

### Props

| Prop  |  Description  | Type | Default Values |
|---|---|---|---|
| `type` | 类型 | string [`info/success/error/warning/default`] |  info |
| `content` | 内容 | string | -- |
| `closable`|  是否显示关闭按钮 | boolean | true |
| `close-label`| 自定义关闭文本 | string | -- |
| `show-icon`|  是否显示图标 | boolean | true |
| `custom-icon`|  自定义图标 | string | -- |


### Slots

| Slot  |  Description  | Example |
|---|---|---|---|
| `default` | 内容插槽 | -- |


### Events

| Event  |  Description  | Arguments |
|---|---|---|
| `close` | 模态框关闭时回调 | -- |