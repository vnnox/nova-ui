# ColorPicker 调色板

## 使用和示例

### 基础用法
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <input class="nv-input" id="ins1" value="#43a3fb">
  </div>  
</div>
<script>
  var ins1 = new Nova.ColorPicker(document.getElementById('ins1'))
  // 回收实例
  window.instances.push(ins1)
</script>  
```
:::

### 无快捷色块
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <input class="nv-input" id="ins2" value="#43a3fb">
  </div>  
</div>
<script>
  var ins2 = new Nova.ColorPicker(document.getElementById('ins2'), {
    lumps: null
  })
  // 回收实例
  window.instances.push(ins2)
</script>  
```
:::



## API

### Options
| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| lang | 当前语言 | string | `zh-CN`|
| inline | 非`Picker`，直接插入到指定容器 | boolean  | false |
| value | 当前绑定值 | string | -- |
| lumps | 快捷色块 | array<color>  | ['#d81e06',...,'#d6204b'] |
| clearable | 显示清空按钮 | boolean | false |
| showInput | 显示输入框 | boolean | true |
| align | picker相对target的位置 | string`<left,center,right>` | `left` |
| disabled | 是否禁用组件 | boolean | false |
| customClass | 自定义样式名称，多样式以逗号`,`分隔 | string | -- |


### Methods
| Method  | Description | Parameters |
| ----------- | ----------- | ----------- |
| setValue | 设定当前值 | (string<color>) |
| clear | 清空当前值 | -- |
| getValue | 获取当前值 | -- |
| open | 打开Picker | -- |
| close | 关闭Picker | -- |
| disable | 禁用Picker | -- |
| enable | 启用Picker | -- |
| destroy | 销毁实例`销毁后，实例将完全不可用` | -- |


### Events

| Event Name  | Description | Parameters |
| ----------- | ----------- | ----------- |
| open | 打开弹框时触发 | (PickerInstance) |
| close | 关闭弹框时触发 | (PickerInstance) |
| change | 当调色面板上的值改变时触发，此时绑定至不会改变。用于在`inline`模式中监听变化 | (value, oldValue, initValue) |
| done | 点击确定按钮时触发，此时绑定值会改变。用于在`picker`模式中改变绑定值 | (value, oldValue) |