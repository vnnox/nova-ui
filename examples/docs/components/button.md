# Button 按钮

### 基础使用
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">默认样式</h5>
  <div class="doc-row__body">
    <button class="nv-btn">常规按钮</button>
    <button class="nv-btn nv-btn--primary">强调按钮</button>
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">圆角样式</h5>
  <div class="doc-row__body">
    <button class="nv-btn nv-btn--pill">常规按钮</button>
    <button class="nv-btn nv-btn--primary nv-btn--pill">强调按钮</button>
  </div>
</div> 
```
:::

### 禁用
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <button class="nv-btn" disabled>常规按钮</button>
    <button class="nv-btn nv-btn--primary" disabled>强调按钮</button>
    <button class="nv-btn nv-btn--pill" disabled>常规按钮</button>
    <button class="nv-btn nv-btn--primary nv-btn--pill" disabled>强调按钮</button>
  </div>
</div>
```
:::

### 小型尺寸
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <button class="nv-btn nv-btn--small">常规按钮</button>
    <button class="nv-btn nv-btn--primary nv-btn--small">强调按钮</button>
    <button class="nv-btn nv-btn--pill nv-btn--small">常规按钮</button>
    <button class="nv-btn nv-btn--primary nv-btn--pill nv-btn--small">强调按钮</button>
  </div>
</div>
```
:::

### 按钮组
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">默认样式</h5>
  <p class="doc-row__describe"></p>
  <div class="doc-row__body">
    <div class="nv-btns">
      <button class="nv-btn nv-actived">选项一</button>
      <button class="nv-btn">选项二</button>
      <button class="nv-btn">选项三</button>
      <button class="nv-btn">选项四</button>
    </div>  
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">强调样式</h5>
  <p class="doc-row__describe">给按钮添加<code>nv-actived</code>样式，即可选中</p>
  <div class="doc-row__body">
    <div class="nv-btns nv-btns--primary">
      <button class="nv-btn">选项一</button>
      <button class="nv-btn nv-actived">选项二</button>
      <button class="nv-btn">选项三</button>
      <button class="nv-btn">选项四</button>
    </div>  
  </div>
</div> 
```
:::