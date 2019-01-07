# Popover 弹出框

## 使用和示例

### 基础用法
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <button type="button" class="nv-btn" id="ins1">hover触发</button>
    <button type="button" class="nv-btn" id="ins2">click触发</button>
    <button type="button" class="nv-btn" id="ins3">focus触发</button>
  </div>  
</div>
<script>
  var $ins1 = document.getElementById('ins1')
  var $ins2 = document.getElementById('ins2')
  var $ins3 = document.getElementById('ins3')
  var ins1 = new Nova.Popover($ins1, {
    trigger: 'hover',
    content: '严禁上传任何暴力恐怖、色情、侵权等违法内容'
  })
  var ins2 = new Nova.Popover($ins2, {
    trigger: 'click',
    content: '严禁上传任何暴力恐怖、色情、侵权等违法内容'
  })
  var ins3 = new Nova.Popover($ins3, {
    trigger: 'focus',
    content: '严禁上传任何暴力恐怖、色情、侵权等违法内容'
  })

  // 回收实例
  window.instances.push(ins1, ins2)
</script>  
```
:::

### Balloon提示
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <input type="text" id="ins4" class="nv-input" placeholder="获取焦点触发" />
    <hr class="nv-hr">
    <input type="text" id="ins5" class="nv-input" placeholder="获取焦点触发" />
    <hr class="nv-hr">
    <input type="text" id="ins6" class="nv-input" placeholder="获取焦点触发" />
  </div>  
</div>
<script>
  var $ins4 = document.getElementById('ins4')
  var $ins5 = document.getElementById('ins5')
  var $ins6 = document.getElementById('ins6')

  var ins4= new Nova.Popover($ins4, {
    trigger: 'focus',
    content: '支持1-32位中英文符号',
    customClass: 'nv-popover--primary',
    placement: 'right',
  })
  var ins5 = new Nova.Popover($ins5, {
    trigger: 'focus',
    content: '支持1-32位中英文符号',
    customClass: 'nv-popover--success',
    placement: 'right',
  })
  var ins6 = new Nova.Popover($ins6, {
    trigger: 'focus',
    content: '支持1-32位中英文符号',
    customClass: 'nv-popover--error',
    placement: 'right',
  })

  // 回收实例
  window.instances.push(ins4, ins5, ins6)
</script>  
```
:::


### 显示按钮和标题
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <button type="button" class="nv-btn" id="ins7">显示标题</button>
    <button type="button" class="nv-btn" id="ins8">显示按钮</button>
  </div>  
</div>
<script>
  var $ins7 = document.getElementById('ins7')
  var $ins8 = document.getElementById('ins8')

  var ins7= new Nova.Popover($ins7, {
    content: '支持1-32位中英文符号',
    placement: 'top',
    title: '提示',
    zIndex: 10,
  })
  var ins8= new Nova.Popover($ins8, {
    content: '您确定要删除这个播放器吗？此操作不可逆！！',
    placement: 'top',
    showConfirm: true,
    showCancel: true,
    onConfirm() {
      alert('删除成功')
    }
  })

  // 回收实例
  window.instances.push(ins7, ins8)
</script>  
```
:::

### Placement
:::demo
```html
<div class="doc-row">
  <p class="doc-row__describe">通过配置项<code>placement</code>，可以设置其显示位置</p>
  <div class="doc-row__body" id="ins9">
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <button type="button" class="nv-btn demo-placement" data-placement="top-start">上左</button>
    <button type="button" class="nv-btn demo-placement" data-placement="top">上中</button>
    <button type="button" class="nv-btn demo-placement" data-placement="top-end">上右</button>
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <br/>
    <br/>
    <button type="button" class="nv-btn demo-placement" data-placement="left-start">左上</button>
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <button type="button" class="nv-btn demo-placement" data-placement="right-start">右上</button>
    <br/>
    <br/>
    <button type="button" class="nv-btn demo-placement" data-placement="left">左中</button>
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <button type="button" class="nv-btn demo-placement" data-placement="right">右中</button>
    <br/>
    <br/>
    <button type="button" class="nv-btn demo-placement" data-placement="left-end">左下</button>
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <button type="button" class="nv-btn demo-placement" data-placement="right-end">右下</button>
    <br/>
    <br/>
    <button type="button" class="nv-btn nv-hidden">占位</button>
    <button type="button" class="nv-btn demo-placement" data-placement="bottom-start">下左</button>
    <button type="button" class="nv-btn demo-placement" data-placement="bottom">下中</button>
    <button type="button" class="nv-btn demo-placement" data-placement="bottom-end">下右</button>
    <button type="button" class="nv-btn nv-hidden">占位</button>
  </div>  
</div>

<script>
  document.getElementById('ins9').querySelectorAll('.demo-placement').forEach(function($btn) {
    var placement = $btn.getAttribute('data-placement')
    var instance = new Nova.Popover($btn, {
      trigger: 'click',
      content: '严禁上传任何暴力恐怖、色情、侵权等违法内容',
      placement: placement,
    }) 
    window.instances.push(instance)
  })
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
| zIndex | 层级,未设置将会自动填充 | number | -- |
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

| Event  | Description | Parameters |
| ----------- | ----------- | ----------- |
| open | 打开弹框时触发 | (PickerInstance) |
| close | 关闭弹框时触发 | (PickerInstance) |