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
        <input class="nv-input" id="ins1" placeholder="请选择时间" readonly>
      </div>
      <div class="doc-cell">
        <h5>时分</h5>
        <input class="nv-input" id="ins2" placeholder="请选择时间" readonly>
      </div>
      <div class="doc-cell">
        <h5>时分秒毫秒</h5>
        <input class="nv-input" id="ins3" placeholder="请选择时间" readonly>
      </div>
      <div class="doc-cell">
        <h5>显示按钮</h5>
        <input class="nv-input" id="ins4" placeholder="请选择时间" readonly>
      </div>
       <div class="doc-cell">
        <h5>不显示微调</h5>
        <input class="nv-input" id="ins5" placeholder="请选择时间" readonly>
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
    value: new Date(),
    format: 'HH:mm:ss.SSS',
  })
  var ins4 = new Nova.TimePicker(document.getElementById('ins4'), {
    value: new Date(),
    now: true,
    confirm: true,
  })

  var ins5 = new Nova.TimePicker(document.getElementById('ins5'), {
    value: new Date(),
    format: 'HH:mm:ss.SSS',
    spinner: false,
  })
  // 回收实例
  window.instances.push(ins1, ins2, ins3, ins4, ins5)
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
| `s` | 秒，不补零 | 0 1 ... 58 59 |
| `ss` | 秒，补零 | 00 01 ... 58 59 |
| `SSS` | 毫秒 | 000 001 ... 988 999 |

### Options
| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| lang | 当前语言 | string | -- |
| value | 当前绑定值 | string/Date | -- |
| defaultValue | 默认值 | string/Date | '00:00:00' |
| format | 格式化，见`Format` | string | `HH:mm:ss` |
| now | 是否显示此刻按钮 | boolean | false |
| confirm | 是否显示确定按钮 | boolean | false |
| align | picker相对target的位置 | string`<left,center,right>` | `left` |
| disabled | 是否禁用组件 | boolean | false |
| spinner | 是否显示微调器 | boolean | true |
| customClass | 自定义样式名称，多样式以逗号`,`分隔 | string | -- |


### Methods
| Method  | Description | Parameters |
| ----------- | ----------- | ----------- |
| setValue | 设定当前值 | (value:Date|null) |
| getValue | 获取当前值 | (format:boolean) |
| open | 打开Picker | -- |
| close | 关闭Picker | -- |
| disable | 禁用Picker | -- |
| enable | 启用Picker | -- |
| destroy | 销毁实例`销毁后，实例将完全不可用` | -- |


### Events

> 没有设置`confirm`按钮时，`change和done`方法返回值一致。当设置`confirm`按钮时，只有点击确定按钮才会改变绑定值，否则当Picker关闭时`value`值会复位. 
总结为一句话： **当设置`confirm`按钮时，请使用`done`事件，否则请使用`change`事件**

| Event Name  | Description | Parameters |
| ----------- | ----------- | ----------- |
| open | 打开弹框时触发 | (PickerInstance) |
| close | 关闭弹框时触发 | (PickerInstance) |
| change | 当面板上的值改变时触发，此时绑定值不会改变 | (formatValue, newValue) |

