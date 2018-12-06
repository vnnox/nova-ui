# Message 消息提示

## 使用和示例

> `Nova.Message`是一个静态类，使用时无需使用`new`关键字。

### 基础用法
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <button type="button" class="nv-btn" id="ins1">消息</button>
    <button type="button" class="nv-btn" id="ins2">成功</button>
    <button type="button" class="nv-btn" id="ins3">失败</button>
    <button type="button" class="nv-btn" id="ins4">警告</button>
  </div>  
</div>
<script>
  var $ins1 = document.getElementById('ins1')
  var $ins2 = document.getElementById('ins2')
  var $ins3 = document.getElementById('ins3')
  var $ins4 = document.getElementById('ins4')
  $ins1.onclick = function () {
    Nova.Message.info('我是一条消息提示')
  }
  $ins2.onclick = function () {
    Nova.Message.success('我是一条成功信息提示')
  }
  $ins3.onclick = function () {
    Nova.Message.error('我是一条失败信息提示' )
  }
  $ins4.onclick = function () {
    Nova.Message.warning('我是一条告警信息提示' )
  }

  // 用于回收实例
  var instance = Object.create(null)
  instance.destroy = function () {
    $ins1.onclick =  $ins2.onclick = $ins3.onclick = $ins4.onclick = null
    Nova.Message.destroy()
  }
  window.instances.push(instance)
</script>  
```
:::

## API

### Options

| Attribute   | Description | Type |  Default Values |
|---|---|---|---|
| `icon` | 图标类名 | string |  缺省值为当前类型的图标 |
| `duration` | 自动关闭时间，单位毫秒，为0时不自动关闭 | number | 3000 |
| `asHtml` | 内容作为html内容插入 | boolean | false |
| `closeable`|  显示关闭按钮 | boolean | true |
| `customClass`|  自定义样式，多个样式使用`,`隔开 | string | -- |
| `onClose`|  关闭时回调 | function | -- |


### Methods

| Method  | Description | Parameters |
|---|---|---|
| `success` | 打开成功类型的提示框 | (content:string, options?: Options) |
| `error` | 打开错误类型的提示框 | (content:string, options?: Options) |
| `warning` | 打开警告类型的提示框 | (content:string, options?: Options) |
| `info` | 打开提示类型的提示框 | (content:string, options?: Options) |
| `config` | 全局配置Message默认属性 | (config: Options) |
| `destroy` | 销毁所有Message实例 | -- | 
