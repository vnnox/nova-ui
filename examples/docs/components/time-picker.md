# TimePicker 时间选择器

## 使用和示例

### 基础用法
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <div class="doc-cells">
      <div class="doc-cell">
        <h5>默认</h5>
        <input class="nv-input" id="ins1" value="" readonly>
      </div>
      <div class="doc-cell">
        <h5>时分</h5>
        <input class="nv-input" id="ins2" value="" readonly>
      </div>
      <div class="doc-cell">
        <h5>显示按钮</h5>
        <input class="nv-input" id="ins3" value="16:40:38" readonly>
      </div> 
    </div>  
  </div>  
</div>
<script>
  var ins1 = new Nova.TimePicker(document.getElementById('ins1'), {})
  var ins2 = new Nova.TimePicker(document.getElementById('ins2'), {
    format: 'HH:mm',
    value: new Date()
  })
  var ins3 = new Nova.TimePicker(document.getElementById('ins3'), {
    confirm: true,
    cancel: true
  })
  // 回收实例
  window.instances.push(ins1, ins2, ins3)
</script>  
```
:::

### 最小最大时间
:::demo
```html
<div class="doc-row">
  <p class="doc-row__describe">通过设置配置项<code>minTime/maxTime</code>，则组件仅可在有效时间内选择时间。同时，组件实例提供了<code>setMinTime</code>和<code>setMaxTime</code>方法来随时调整最小时间和最大时间</p>
  <div class="doc-row__body">
    <input class="nv-input" id="ins4" value=""> 
  </div>  
</div> 

<script>
  var ins5 = new Nova.TimePicker(document.getElementById('ins4'), {
    value: '10:24:48',
    minTime: '06:20:00',
    maxTime: '23:40:30'
  })
  // 回收实例
  window.instances.push(ins4)
</script>  
```
:::


## API

### Format
| Format   | Description|  Example |
| ----------- | ----------- | ----------- |
| `H` | 小时（24），不补零 | 0 1 ... 22 23 |
| `HH` | 小时（24），补零 | 00 01 ... 22 23 |
| `h` | 小时（12），不补零 | 1 2 ... 11 12 |
| `hh` | 小时（12），补零 | 01 02 ... 11 12 |
| `m` | 分钟，不补零 | 0 1 ... 58 59 |
| `mm` | 分钟，补零 | 00 01 ... 58 59 |



### Options
| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| lang | 当前语言 | string | -- |
| value | 当前绑定值 | string/Date | -- |
| defaultValue | 默认值 | string/Date | '00:00:00' |
| format | 格式化，见`Format` | string | `HH:mm:ss` |
| minTime | 可选的最小时间 | string/Date | -- |
| maxTime | 可选的最大时间 | string/Date | -- |
| cancel | 是否显示取消按钮 | boolean | false |
| confirm | 是否显示确定按钮 | boolean | false |
| align | picker相对target的位置 | string`<left,center,right>` | `left` |
| disabled | 是否禁用组件 | boolean | false |
| customClass | 自定义样式名称，多样式以逗号`,`分隔 | string | -- |


### Methods
| Method  | Description | Parameters |
| ----------- | ----------- | ----------- |
| setValue | 设定当前值 | (value:Date) |
| getValue | 获取当前值 | (format:boolean) |
| setMinTime | 设置最小时间 | (value:string`<date>`) |
| setMaxTime | 设置最大时间 | (value:string`<date>`) |
| open | 打开Picker | -- |
| close | 关闭Picker | -- |
| disable | 禁用Picker | -- |
| enable | 启用Picker | -- |
| destroy | 销毁实例`销毁后，实例将完全不可用` | -- |


### Events

> 没有设置`confirm`按钮时，`change和done`方法返回值一致。

| Event Name  | Description | Parameters |
| ----------- | ----------- | ----------- |
| open | 打开弹框时触发 | (PickerInstance) |
| close | 关闭弹框时触发 | (PickerInstance) |
| change | 当面板上的值改变时触发，此时绑定值不会改变 | (formatValue, newValue, oldValue) |
| done | 点击确定按钮时触发，此时绑定值会改变 | (formatValue, newValue, oldValue) |

