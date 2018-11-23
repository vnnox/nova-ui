# ColorPicker 调色板

## 使用和示例

### 基础用法
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <div id="ins1"></div>
  </div>  
</div>
<script>
  var ins1 = new Nova.ColorPicker(document.getElementById('ins1'))
  // 回收实例
  window.instances.push(ins1)
</script>  
```
:::



## API

### Placement
| Placement | Description |
| ----------- | ----------- | 
| top | 上中 | 
| top-start | 上右 | 
| top-end | 上左 | 
| left | 左中 | 
| left-start | 左上 | 
| left-end | 左下 | 
| right | 右中 | 
| right-start | 右上 | 
| right-end | 右下 | 
| bottom | 下中 | 
| bottom-start | 下左 | 
| bottom-end | 下右 | 

### Options
| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| trigger | 触发方式 | string`<hover/focus/click>` | `click`|
| title | 标题 | string  | -- |
| content | 内容 | string | -- |
| placement | 相对`target`的位置 | string`见Placement`  | `bottom` |
| width | 宽度 | number/string | `200px` |
| margin | 相对`target`的距离 | number | `12` |
| asHtml | 内容作为HTML渲染，注意`XSS`注入，默认关闭 | boolean | false |
| disabled | 是否禁用组件 | boolean | false |
| customClass | 自定义样式名称，多样式以逗号`,`分隔 | string | -- |
| showArrow | 是否显示箭头 | boolean | true |
| autoCorrect | 自动校正位置，如下面位置放不下时，自动放在上面 | boolean | true |
| confirmBtn | 是否显示确认按钮 | boolean | false |
| cancelBtn | 是否显示取消按钮 | boolean | false |
| confirmText | 确认按钮文本 | string | `是` |
| cancelText | 取消按钮文本 | string | `否` |
| confirmCss | 确认按钮样式，多样式以空格分隔 | string | `mo-btn--primary` |
| cancelCss | 取消按钮样式，多样式以空格分隔 | string | `mo-btn--link` |
| onConfirm | 确认按钮点击时回调，如果返回`false`，模态框将不会关闭 | function | null |
| onCancel | 取消按钮点击时回调，如果返回`false`，模态框将不会关闭 | function | null |



### Methods
| Method  | Description | Parameters |
| ----------- | ----------- | ----------- |
| open | 打开弹框 | -- |
| close | 关闭弹框 | -- |
| destroy | 销毁实例`销毁后，实例将完全不可用` | -- |


### Events

| Event Name  | Description | Parameters |
| ----------- | ----------- | ----------- |
| open | 打开弹框时触发 | (PickerInstance) |
| close | 关闭弹框时触发 | (PickerInstance) |