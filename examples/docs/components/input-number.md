# InputNumber 计数器

## 使用和示例

### 基础用法
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">基本使用</h5>
  <p class="doc-row__describe">通过鼠标或键盘，输入范围内的数值(包括小数)</p>
  <div class="doc-row__body">
    <div id="ins1"></div>
  </div>
</div>
<script>
  var $container = document.getElementById('ins1')
  var ins1 = new Nova.InputNumber($container, {
    placeholder: '请输入数字',
  })
  var ins2 = new Nova.InputNumber($container, {
    min: 0,
    max: 100,
    value: 10
  })
  var ins3 = new Nova.InputNumber($container, {
    min: 0,
    max: 10,
    value: 0.04,
    step: 0.02
  })

  // 回收示例
  window.instances.push(ins1, ins2, ins3)
</script>  
```
:::

### 可输入和禁用
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">文本框不可输入</h5>
  <p class="doc-row__describe">配置项<code>editable</code>属性可用来限制文本框是否可输入，值为false时，仅可通过调节按钮和键盘来操作</p>
  <div class="doc-row__body">
    <div id="ins2"></div>
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">禁用</h5>
  <div class="doc-row__body">
    <div style="display:inline-block;" id="ins3"></div>
    <label class="nv-switch" role="checkbox" tabindex="0" style="margin-left:20px;">
      <input type="checkbox" id="toggelInsState">
      <i class="nv-switch__icon"></i>
      <span class="nv-switch__label">启用</span>
    </label>
  </div>
</div>
<script>
  var ins4 = new Nova.InputNumber(document.getElementById('ins2'), {
    min: 0,
    max: 100,
    value: 10,
    editable: false
  })
  var ins5 = new Nova.InputNumber(document.getElementById('ins3'), {
    min: 0,
    max: 100,
    value: 10,
    disabled: true
  })
  document.getElementById('toggelInsState').onchange = function() {
    this.checked ? ins5.enable() : ins5.disable()
  }
  // 回收示例
  window.instances.push(ins4, ins5)
</script>  
```
:::

### 格式化
:::demo
```html
<div class="doc-row">
  <p class="doc-row__describe">通过预设<code>formatter</code>格式化函数，可以对当前值进行格式化处理</p>
  <div class="doc-row__body">
    <div id="ins4"></div>
  </div>
</div>

<script>
  var $container = document.getElementById('ins4')
  var ins6 = new Nova.InputNumber($container, {
    min: 0,
    max: 100,
    value: 10,
    formatter(value) {
      if (value === '') {
        return value
      } 
      return value + '%'
    }
  })
  var ins7 = new Nova.InputNumber($container, {
    precision: 2,
    min: 0,
    max: 100,
    value: 10,
    formatter(value) {
      if (value === '') {
        return value
      } 
      return '$ ' + value 
    }
  })
 
  // 回收示例
  window.instances.push(ins6, ins7)
</script>  
```
:::

### 自定义样式
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">自定义宽度</h5>
  <p class="doc-row__describe">通过预设<code>width</code>配置项，可自定义输入框宽度</p>
  <div class="doc-row__body">
    <div id="ins8"></div>
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">小尺寸</h5>
  <p class="doc-row__describe">通过预设<code>size</code>配置项，可指定输入框尺寸，其尺寸值同<a href="/components/#/input">输入框尺寸</a></p>
  <div class="doc-row__body">
    <div id="ins9"></div>
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">自定义样式</h5>
  <p class="doc-row__describe">通过预设<code>customClass</code>配置项，可自定义输入框样式</p>
  <div class="doc-row__body">
    <div id="ins10"></div>
  </div>
</div>

<script>
  var ins8 = new Nova.InputNumber(document.getElementById('ins8'), {
    min: 0,
    max: 100,
    value: 10,
    width: '100%'
  })
  var ins9 = new Nova.InputNumber(document.getElementById('ins9'), {
    min: 0,
    max: 100,
    value: 10,
    size: 'small',
    width: 100
  })
  var ins10 = new Nova.InputNumber(document.getElementById('ins10'), {
    min: 0,
    max: 100,
    value: 10,
    customClass: 'nv-input-number--row'
  })

  // 回收示例
  window.instances.push(ins8, ins9, ins10)
</script>  
```
:::

## API

### Options
| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| value | 当前绑定值 | number | -- |
| min | 最小值 | number | `-Infinity` |
| max | 最大值 | number | `Infinity` |
| step | 步进 | number | 1 |
| precision | 精度 | number | -- |
| editable | 输入框是否可输入，只允许控制按钮 | boolean | true |
| placeholder | 输入框占位符 | string | -- |
| name | 输入框名称 | string | -- |
| width | 输入框宽度 | <string/number> | `130px` |
| size | 输入框宽度 | string<`default|small|large`> | `default` |
| disabled | 是否禁用组件 | boolean | false |
| customClass | 自定义样式名称，多样式以逗号`,`分隔 | string | -- |
| formatter | 格式化 | function | null |


### Methods
| Method  | Description | Parameters |
| ----------- | ----------- | ----------- |
| setValue | 设定当前值 | (value:number) |
| getValue | 获取当前值 | -- |
| increase | 递增 | -- |
| decrease | 递减 | -- |
| disable | 禁用Picker | -- |
| enable | 启用Picker | -- |
| destroy | 销毁实例`销毁后，实例将完全不可用` | -- |


### Events

| Event  | Description | Parameters |
| ----------- | ----------- | ----------- |
| change | 当值改变时触发 | (value, oldValue) |