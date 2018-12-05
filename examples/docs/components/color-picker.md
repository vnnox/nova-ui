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


## API

### Options
| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| lang | 当前语言 | string | -- |
| value | 当前绑定值 | string | -- |
| lumps | 快捷色块 | array<color>  | ['#d81e06',...,'#d6204b'] |
| recentlyColors | 最近使用的颜色组 | array<color> | [] |
| maxRecentlyCount | 最近使用的颜色的最大个数 | number | 6 | 
| align | picker相对target的位置 | string`<left,center,right>` | `left` |
| palette | 显示调色器 | boolean | true |
| disabled | 是否禁用组件 | boolean | false |
| customClass | 自定义样式名称，多样式以逗号`,`分隔 | string | -- |


### Methods
| Method  | Description | Parameters |
| ----------- | ----------- | ----------- |
| setValue | 设定当前值 | (string<color>) |
| addRecentlyColor | 添加颜色到最近使用面板 | (string/array)
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
| change | 当值改变时触发| (value, oldValue) |
| palette-change | 当调色器上的颜色改变后触发 | (value, event) |