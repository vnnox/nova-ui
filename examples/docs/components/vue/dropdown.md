# Dropdown 下拉面板

> Dropdown组件是一个独立组件，其默认`slot`就是要显示的下拉内容。Dropdown组件可以和Dropmenu组件合并使用

> Dropmenu组件是一个复合组件，其包括 `nv-dropmenu-item`子组件


## 使用和示例

### 基础用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-dropdown trigger="hover">
        <button type="button" class="nv-btn" slot="toggle">Hover Toggle</button>
        <div style="padding: 10px;">
          我是下拉内容
          <br/>
          我是下拉内容
        </div>  
      </nv-dropdown>
    </div>  
  </div>
</template>
<script>
  export default {}
</script> 
```
:::

### 与Dropdown组件复合使用
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-dropdown trigger="hover">
        <button type="button" class="nv-btn" slot="toggle">Hover Toggle</button>
        <nv-dropmenu>
          <nv-dropmenu-item>选项一</nv-dropmenu-item>
          <nv-dropmenu-item>选项二
            <nv-dropmenu slot="sub">
              <nv-dropmenu-item>选项一</nv-dropmenu-item>
              <nv-dropmenu-item>选项一</nv-dropmenu-item>
            </nv-dropmenu>  
          </nv-dropmenu-item>
          <nv-dropmenu-item divider>选项二</nv-dropmenu-item>
          <nv-dropmenu-item>选项二</nv-dropmenu-item>
        </nv-dropmenu>  
      </nv-dropdown>
      
      <nv-dropdown>
        <button type="button" class="nv-btn" slot="toggle">Click Toggle</button>
        <nv-dropmenu>
          <nv-dropmenu-item @click="menuClick">选项一</nv-dropmenu-item>
          <nv-dropmenu-item>选项二
            <nv-dropmenu slot="sub">
              <nv-dropmenu-item disabled>选项一</nv-dropmenu-item>
              <nv-dropmenu-item>选项一</nv-dropmenu-item>
            </nv-dropmenu>  
          </nv-dropmenu-item>
          <nv-dropmenu-item divider>选项二</nv-dropmenu-item>
          <nv-dropmenu-item :wrapped="false">
            <a class="item-inner">选项二</a>
          </nv-dropmenu-item>
        </nv-dropmenu>  
      </nv-dropdown>

    </div>  
  </div>
</template>
<script>
  export default {
    methods: {
      menuClick (e) {
        console.log(e)
      }
    },
  }
</script> 
```
:::


## API

### Dropdown Attributes

| 属性名  |  描述  | 类型 | 默认值 |
|---|---|---|---|
| `value` | 绑定值，是否默认展开 | boolean |  false |
| `trigger` | 触发方式 | string [`click`, `hover`] | `click` |
| `align`|  对齐方式 | string [ `bottom-start`,`bottom`,`bottom-end` ] | `bottom` |
| `width`| 下拉框宽度 | string | -- |


### Dropdown Slots

| 插槽名  |  描述  | 示例 |
|---|---|---|---|
| `toggle` | 控制按钮插槽 | -- |
| `default` | 内容插槽 | -- |


### Dropmenu Attributes
--无--

### Dropmenu Slots

| 插槽名  |  描述  | 示例 |
|---|---|---|---|
| `default` | 内容插槽 | -- |


### DropmenuItem Attributes

| 属性名  |  描述  | 类型 | 默认值 |
|---|---|---|---|
| `divider` | 是否是分隔符 | boolean |  false |
| `disabled` | 是否禁用 | boolean |  false |
| `wrapped`  | 是否在默认插槽外生成一个class为`item-inner`的包裹元素 | boolean | true 
| `click` | 点击回调 | function |  e |


### DropmenuItem Slots

| 插槽名  |  描述  | 示例 |
|---|---|---|---|
| `default` | 内容插槽 | -- |
| `sub` | 子内容插槽 | -- |