# Modal 模态框

## 使用和示例

### 基础用法
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">默认配置</h5>
  <p class="doc-row__describe">默认配置下<code>btns</code>配置项为空，因此无按钮</p>
  <div class="doc-row__body">
    <button type="button" class="nv-btn" id="ins1">打开Dialog</button>
  </div>  
</div>
<hr class="nv-hr" />
<div class="doc-row">
  <h5 class="doc-row__title">自定义按钮</h5>
  <p class="doc-row__describe">通过<code>btns</code>配置项可自定义按钮(组)</p>
  <div class="doc-row__body">
    <button type="button" class="nv-btn" id="ins2">打开Dialog</button>
  </div>  
</div>
<script>
  var $ins1 = document.getElementById('ins1')
  var ins1 = new Nova.Modal({
    title: 'Dialog',
    content: '这是一个默认形态的模态框'
  })
  $ins1.onclick = function() {
    ins1.open()
  }
  var $ins2 = document.getElementById('ins2')
  var ins2 = new Nova.Modal({
    title: 'Dialog',
    content: '这是一个默认形态的模态框',
    btns: [
      {
        text: '确定',
        css: 'nv-btn--primary',
        handle() {
          alert('自定义事件')
        }
      },
      {
        text: '取消'
      },  
    ]
  })
   $ins2.onclick = function() {
    ins2.open()
  }

  // 回收实例
  window.instances.push(ins1, ins2)
</script>  
```
:::

## API

### Attributes

| Attribute   | Description | Type |  Default Values |
|---|---|---|---|
| `visible` | 默认是否打开 | boolean |  false |
| `title` | 标题 | <string/boolean> | -- |
| `content` | 内容 | <string/HTMLElement> | -- |
| `appendTo`|  插入到的父级元素 | HTMLElement | `document.body` |
| `backdrop`|  显示遮罩层 | boolean | true |
| `backdropBackground`|  遮罩层背景色 | string | `rgba(0,0,0,.5)` |
| `backdropClose`|  点击遮罩层关闭 | boolean | true |
| `escClose`|  按Esc键关闭 | boolean | true |
| `width`|  模态框宽度 | number/string | -- |
| `top`|  距离顶部高度 | number/string | `10%` |
| `customClass`|  自定义样式，多个样式使用`,`隔开 | string | -- |
| `btns`|  按钮组，元素见`Btn` | array | -- |
| `footSlot`|  btns同级插槽 | <string/HTMLElement> | -- |
| `scrollLock`|  是否锁屏 | boolean | true |


### Btn

| Attribute   | Description | Type |  Default Values |
|---|---|---|---|
| `text` | 按钮文本 | boolean |  -- |
| `css` | 按钮样式名称 | 多个样式使用` `隔开 | -- |
| `hanlde` | 按钮点击事件 | function | ins.close |


#### Btns 示例
```javascript
{
  btns: [
    {
      text: 'Confirm',
      css: 'nv-btn--primary',
      handle () {
        // todo
      }
    },
    {
      text: 'Cancel',
      // 不设置handle，默认关闭
    },
  ]
}
```

### Methods

| Method  | Description | Parameters |
|---|---|---|
| `open` | 打开模态框 | -- |
| `close` | 关闭模态框 | (type?:string) |
| `destroy` | 销毁实例 | -- | 


### Events

| Event  | Description | Parameters |
|---|---|---|
| `open` | 模态框打开时回调 | ($el:HTMLElement) |
| `close` | 模态框关闭时回调 | (type:string, $el:HTMLElement) |