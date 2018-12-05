# MessageBox 弹框

## 使用和示例

> `Nova.MessageBox`是一个静态类，使用时无需使用`new`关键字。

### 基础用法
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <button type="button" class="nv-btn" id="ins1">Alert</button>
    <button type="button" class="nv-btn" id="ins2">Confirm</button>
  </div>  
</div>

<script>
  var $ins1 = document.getElementById('ins1')
  var $ins2 = document.getElementById('ins2')
  $ins1.onclick = function () {
    Nova.MessageBox.alert('内容', '标题')
  }
  $ins2.onclick = function () {
    Nova.MessageBox.confirm('此操作将永久删除该文件，是否删除？', '警告', {
      type: 'warning'
    })
  }
</script>  
```
:::

## API

### Options

| Attribute   | Description | Type |  Default Values |
|---|---|---|---|
| `message`|  消息文本 | string | -- |
| `title`|  标题 | string | -- |
| `describe`|  附加描述信息，作为消息的一部分 | string | -- |
| `asHtml`|  `message`和`describe`是否当做HTML渲染 | boolean | false |
| `type`|  类型 | string`<info/success/error/warning>` | `info` |
| `showIcon`|  显示显示图标 | boolean | true |
| `icon`|  自定义图标类名 | string | 根据当前type自动获取 |
| `confirmButtonText`|  确认按钮文本 | string | 确定 |
| `cancelButtonText`|  取消按钮文本 | string | 取消 |
| `confirmButtonCss`|  确认按钮附加样式 | string | `nv-btn--primary` |
| `cancelButtonCss`|  取消按钮附加样式 | string | -- |
| `confirm`|  确认事件回调, 当`return false`时模态框不关闭 | function | -- |
| `cancel`|  取消事件回调,当`return false`时模态框不关闭 | function | -- |
| `backdrop`|  显示遮罩层 | boolean | true |
| `backdropBackground`|  遮罩层背景色 | string | `rgba(0,0,0,.5)` |
| `backdropClose`|  点击遮罩层关闭 | boolean | true |
| `escClose`|  按Esc键关闭 | boolean | true |
| `width`|  模态框宽度 | number/string | -- |
| `top`|  距离顶部高度 | number/string | `10%` |
| `scrollLock`|  是否锁屏 | boolean | true |


### Methods

| Method  | Description | Parameters |
|---|---|---|
| `alert` | 提示型消息模态框 | (`message:string, title:string, options:Options`) |
| `confirm` | 确认型消息模态框 | (`message:string, title:string, options:Options`) |
| `destroy` | 销毁所有实例 | -- | 


