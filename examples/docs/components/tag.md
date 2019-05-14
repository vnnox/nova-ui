# Tag 标签

## 使用和示例

> Tag原生组件仅提供CSS基础样式，关闭等事件只在Vue组件中提供。


### 基础用法
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">默认样式</h5>
  <div class="doc-row__body">
    <span class="nv-tag"><span class="nv-tag__label">default</span></span>
     <span class="nv-tag nv-tag--info"><span class="nv-tag__label">info</span></span>
     <span class="nv-tag nv-tag--success"><span class="nv-tag__label">success</span></span>
    <span class="nv-tag nv-tag--error"><span class="nv-tag__label">error</span></span>
    <span class="nv-tag nv-tag--warning"><span class="nv-tag__label">warning</span></span>
  </div>
</div>
```
:::


### 尺寸
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <span class="nv-tag nv-tag--info"><span class="nv-tag__label">默认标签</span></span>
    <span class="nv-tag nv-tag--info nv-tag--small"><span class="nv-tag__label">小型标签</span></span>
    <span class="nv-tag nv-tag--info nv-tag--tiny"><span class="nv-tag__label">极小标签</span></span>
  </div>
</div>
```
:::

### 大圆角
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <span class="nv-tag nv-tag--info nv-pill"><span class="nv-tag__label">默认标签</span></span>
    <span class="nv-tag nv-tag--info nv-pill nv-tag--small"><span class="nv-tag__label">小型标签</span></span>
    <span class="nv-tag nv-tag--info nv-pill nv-tag--tiny"><span class="nv-tag__label">极小标签</span></span>
  </div>
</div>
```
:::


### 可点击的，带有`hover`效果
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <span class="nv-tag nv-tag--info nv-hover"><span class="nv-tag__label">默认标签</span></span>
    <span class="nv-tag nv-tag--info nv-hover nv-tag--small"><span class="nv-tag__label">小型标签</span></span>
    <span class="nv-tag nv-tag--info nv-hover nv-tag--tiny"><span class="nv-tag__label">极小标签</span></span>
  </div>
</div>
```
:::


### 有移除按钮

> Tag原生组件仅提供CSS基础样式，关闭等事件只在Vue组件中提供。

:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <span class="nv-tag nv-tag--info">
      <span class="nv-tag__label">默认标签</span>
      <a class="nv-tag__close nv-icon-close"></a>
    </span>
    <span class="nv-tag nv-tag--info nv-tag--small">
      <span class="nv-tag__label">小型标签</span>
      <a class="nv-tag__close nv-icon-close"></a>
    </span>
    <span class="nv-tag nv-tag--info nv-tag--tiny">
      <span class="nv-tag__label">极小标签</span>
      <a class="nv-tag__close nv-icon-close"></a>
    </span>
  </div>
</div>
```
:::


### 文本溢出
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <span class="nv-tag nv-tag--info">
      <span class="nv-tag__label">默认标签默认标签默认标签默认标签默认标签默认标签</span>
    </span>
    <span class="nv-tag nv-tag--info">
      <span class="nv-tag__label">默认标签默认标签默认标签默认标签默认标签默认标签</span>
      <a class="nv-tag__close nv-icon-close"></a>
    </span>
  </div>
</div>
```
:::


## API

### 标签类

| 类名  |  描述  |
|---|---|
| `nv-tag`  | 标签基础类名  |
| `nv-tag--small`  | 小型标签  | 
| `nv-tag--tiny`  | 极小标签  | 
| `nv-tag--info`  | 提示型标签  | 
| `nv-tag--success`  | 成功型标签  | 
| `nv-tag--error`  | 错误型标签  | 
| `nv-tag--warning`  | 警告型标签  | 
| `nv-pill`  | 大圆角  | 
| `nv-hover`  | 可悬浮点击的  | 
