# DatePicker 日期选择器

## 使用和示例

### 基础用法
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <div class="doc-cells">
      <div class="doc-cell">
        <h5>以 [日] 为单位</h5>
        <input class="nv-input" id="ins1" value="2018-11-11">
      </div>
      <div class="doc-cell">
        <h5>以 [年] 为单位</h5>
        <input class="nv-input" id="ins2" value="2018年">
      </div> 
      <div class="doc-cell">
        <h5>以 [月] 为单位</h5>
        <input class="nv-input" id="ins3" value="2018-11">
      </div>
      <div class="doc-cell">
        <h5>日期多选</h5>
        <input class="nv-input" id="ins33" >
      </div>   
    </div>  
  </div>  
</div>
<script>
  var ins1 = new Nova.DatePicker(document.getElementById('ins1'), {})
  var ins2 = new Nova.DatePicker(document.getElementById('ins2'), {
    mode: 'year',
    format: 'YYYY年'
  })
  var ins3 = new Nova.DatePicker(document.getElementById('ins3'), {
    mode: 'month',
    format: 'YYYY-MM'
  })

   var ins33 = new Nova.DatePicker(document.getElementById('ins33'), {
    format: 'YYYY-MM-DD',
    multiple: true,
  })

  // 回收实例
  window.instances.push(ins1, ins2, ins3)
</script>  
```
:::

### 禁用
:::demo
```html
<div class="doc-row">
  <h4 class="doc-row__title">通过<code>min/max</code></h4>
  <p class="doc-row__describe">通过设置配置项<code>min/max</code>可以设置有效日期范围，只有在该范围内的日期才是有效的。同时，配置项<code>min/max</code>还影响上一年/下一年/上一月/下一月等操作按钮的状态</p>
  <div class="doc-row__body">
    <input class="nv-input" id="ins4" value="2018-11-11">
  </div>  
</div>

<hr class="nv-hr">
<div class="doc-row">
  <h4 class="doc-row__title">通过<code>disabledDate</code></h4>
  <p class="doc-row__describe">配置项<code>disabledDate</code>是一个方法，当面板上的内容改变时，会迭代所有当前面板上的日期进入该方法，只需要返回<code>true</code>即可禁用日期</p>
  <div class="doc-row__body">
    <input class="nv-input" id="ins5" value=""> 
  </div>  
</div> 

<script>
  var ins4 = new Nova.DatePicker(document.getElementById('ins4'), {
    min: '2018-10-1',
    max: '2019-5-30'
  })
  var ins5 = new Nova.DatePicker(document.getElementById('ins5'), {
    value: new Date(),
    disabledDate(date) {
      return date.getTime() < (Date.now() - 86400)
    }
  })
  // 回收实例
  window.instances.push(ins4, ins5)
</script>  
```
:::

### 显示按钮
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <div class="doc-cells">
      <div class="doc-cell">
        <h5>今天</h5>
        <input class="nv-input" id="ins6" value="2018-11-11">
      </div>
      <div class="doc-cell">
        <h5>确定</h5>
        <input class="nv-input" id="ins7" value="2018-11-11">
      </div> 
    </div>  
  </div>  
</div>
<script>
  var ins6 = new Nova.DatePicker(document.getElementById('ins6'), {
    today: true
  })
  var ins7 = new Nova.DatePicker(document.getElementById('ins7'), {
    today: true,
    confirm: true
  })
  // 回收实例
  window.instances.push(ins6, ins7)
</script>  
```
:::


## API

### Format
| Format   | Description|  Example |
| ----------- | ----------- | ----------- |
| `YY` | 两位年 | 70 71 ... 29 30 |
| `YYYY` | 四位年 | 1970 1971 ... 2029 2030 |
| `M` | 月，不补零 | 1 2 ... 11 12 |
| `MM` | 月，补零 | 01 02 ... 11 12 |
| `D` | 日，不补零 | 1 2 ... 30 31 |
| `DD` | 日，补零 | 01 02 ... 30 31 |
| `H` | 小时（24），不补零 | 0 1 ... 22 23 |
| `HH` | 小时（24），补零 | 00 01 ... 22 23 |
| `h` | 小时（12），不补零 | 1 2 ... 11 12 |
| `hh` | 小时（12），补零 | 01 02 ... 11 12 |
| `m` | 分钟，不补零 | 0 1 ... 58 59 |
| `mm` | 分钟，补零 | 00 01 ... 58 59 |
| `s` | 秒，不补零 | 0 1 ... 58 59 |
| `ss` | 秒，补零 | 00 01 ... 58 59 |


### Options
| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| lang | 当前语言 | string | -- |
| inline | 非`Picker`，直接插入到指定容器 | boolean  | false |
| value | 当前绑定值 | string/Date/Array<Date> | -- |
| mode | 模式 | string`<date/year/month>`  | `date` |
| format | 格式化，见`Format` | string | `YYYY-MM-DD` |
| weekStart | 一周的起始日 | number`<0 - 6>` | 0 |
| disabledDate | 设置禁用状态，参数为当前日期，要求返回 Boolean | function:boolean | null |
| min | 可选的最小日期 | string/Date | `1000-1-1` |
| max | 可选的最大日期 | string/Date | `9999-12-31` |
| today | 是否显示今天按钮 | boolean | false |
| confirm | 是否显示确定按钮 | boolean | false |
| align | picker相对target的位置 | string`<left,center,right>` | `left` |
| disabled | 是否禁用组件 | boolean | false |
| customClass | 自定义样式名称，多样式以逗号`,`分隔 | string | -- |
| multiple | 是否支持多选日期 | boolean | false |
| maxMultipleCount | 最多可选的日期个数 | number | `Infinity` |
| multipleSeparator | 多选日期分隔符 | string | `; `|

### Methods
| Method  | Description | Parameters |
| ----------- | ----------- | ----------- |
| setValue | 设定当前值 | (value:Date, updateBind?boolean) |
| isDisabled | 验证传入日期是否为可用 | -- |
| getValue | 获取当前值 | (format:boolean) |
| toggleView | 切换当前面板 | (view:string`<date/year/month>`) |
| open | 打开Picker | -- |
| close | 关闭Picker | -- |
| disable | 禁用Picker | -- |
| enable | 启用Picker | -- |
| destroy | 销毁实例`销毁后，实例将完全不可用` | -- |


### Events

> 在非`inline`模式并且没有设置`confirm`按钮时，`change和done`方法返回值一致。
总结为一句话： **当设置`confirm`按钮时，请使用`done`事件，否则请使用`change`事件**

| Event Name  | Description | Parameters |
| ----------- | ----------- | ----------- |
| open | 打开弹框时触发 | (PickerInstance) |
| close | 关闭弹框时触发 | (PickerInstance) |
| change | 当面板上的值改变时触发，此时绑定值不会改变。用于在`inline`模式中监听变化 | (formatValue, value) |
| done | 点击确定按钮时触发，此时绑定值会改变。用于在`picker`模式中改变绑定值，在`inline`模式中不会触发 | (value, oldValue) |

