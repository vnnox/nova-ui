# Message 消息提示

## 使用和示例

> `$message`是挂载在Vue原型上的一个对象，可以直接调用。


### 基础用法
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <button type="button" class="nv-btn" @click="m1">消息</button>
      <button type="button" class="nv-btn" @click="m2">成功</button>
      <button type="button" class="nv-btn" @click="m3">失败</button>
      <button type="button" class="nv-btn" @click="m4">警告</button>
    </div>  
  </div>
</template>  
<script>
  export default {
    methods: {
      m1() {
        this.$message.info('我是一条消息提示')
      },
      m2() {
        this.$message.success('我是一条成功信息提示')
      },
      m3() {
        this.$message.error('我是一条失败信息提示')
      },
      m4() {
        this.$message.warning('我是一条告警信息提示')
      }
    },
    beforeDestroy() {
      this.$message.destroy()
    }
  }
</script>  
```
:::

## API

### Options

| 属性名  |  描述  | 类型 | 默认值 |
|---|---|---|---|
| `icon` | 图标类名 | string |  缺省值为当前类型的图标 |
| `duration` | 自动关闭时间，单位毫秒，为0时不自动关闭 | number | 3000 |
| `asHtml` | 内容作为html内容插入 | boolean | false |
| `closeable`|  显示关闭按钮 | boolean | true |
| `customClass`|  自定义样式，多个样式使用`,`隔开 | string | -- |
| `onClose`|  关闭时回调 | function | -- |


### Methods

| 方法名  |  描述  | 参数 |
|---|---|---|
| `success` | 打开成功类型的提示框 | (content:string, options?: Options) |
| `error` | 打开错误类型的提示框 | (content:string, options?: Options) |
| `warning` | 打开警告类型的提示框 | (content:string, options?: Options) |
| `info` | 打开提示类型的提示框 | (content:string, options?: Options) |
| `config` | 全局配置Message默认属性 | (config: Options) |
| `destroy` | 销毁所有Message实例 | -- | 
