# Button 按钮

### 基础用法
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

### 使用图标
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">纯图标按钮</h5>
  <p class="doc-row__describe">纯图标按钮使用特殊的<code>nv-btn--icon-pure</code>类，在表现上比正常图标更接近与正方形(左右内边距较少)</p>
  <div class="doc-row__body">
    <button class="nv-btn nv-btn--icon-pure">
      <i class="nv-icon-filter"></i>
    </button>
    <button class="nv-btn nv-btn--icon-pure">
      <i class="nv-icon-gear"></i>
    </button>
  </div>
</div>
<hr class="nv-hr" />
<div class="doc-row">
  <h5 class="doc-row__title">图文组合</h5>
  <div class="doc-row__body">
    <button class="nv-btn">
      <i class="nv-icon-edit"></i>
      <span>编辑</span>
    </button>
    <button class="nv-btn">
      <i class="nv-icon-delete"></i>
      <span>删除</span>
    </button>
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
      <button class="nv-btn nv-actived">选项三</button>
      <button class="nv-btn">选项四</button>
    </div>
    <div class="nv-btns nv-btns--primary" style="margin-left: 100px;">
      <button class="nv-btn nv-btn--icon-pure nv-actived"><i class="nv-icon-menu"></i></button>
      <button class="nv-btn nv-btn--icon-pure"><i class="nv-icon-list"></i></button>
    </div>    
  </div>
</div> 
```
:::