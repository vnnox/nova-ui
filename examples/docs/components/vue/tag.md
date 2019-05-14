# Tag 标签

## 使用和示例

### 基础用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-tag label="默认标签"></nv-tag>
      <nv-tag label="错误标签" type="error"></nv-tag>
    </div>  
  </div>
</template>
<script>
  export default {}
</script> 
```
:::

### 可移除
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-tag label="默认标签" removeable></nv-tag>
      <nv-tag label="错误标签" type="error" removeable></nv-tag>
    </div>  
  </div>
</template>
<script>
  export default {}
</script> 
```
:::


### 尺寸
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-tag label="默认尺寸"></nv-tag>
      <nv-tag label="小型尺寸" size="small"></nv-tag>
      <nv-tag label="极小尺寸" size="tiny"></nv-tag>
      <hr class="nv-hr">
      <nv-tag label="默认尺寸" removeable></nv-tag>
      <nv-tag label="小型尺寸" size="small" removeable></nv-tag>
      <nv-tag label="极小尺寸" size="tiny" removeable></nv-tag>
    </div>  
  </div>
</template>
<script>
  export default {}
</script> 
```
:::

## API

### Attributes

| 属性名  |  描述  | 类型 | 默认值 |
|---|---|---|---|
| `type` | 类型 | string [`info`,`success`,`error`,`warning`] |  `info` |
| `size` | 尺寸 | string [`small`, `tiny`] | `default` |
| `label`|  文本内容 | string | -- |
| `removeable`| 是否可移除 | boolean | false |
| `pill`| 大圆角，药片式的 | boolean | false |
| `hoverable`| 可悬浮的，带有hover效果的 | boolean | false |


### Slots

| 插槽名  |  描述  | 示例 |
|---|---|---|---|
| `default` | 内容插槽 | -- |
