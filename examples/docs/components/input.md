# Input 输入框

### 基础用法
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">常规状态</h5>
  <div class="doc-row__body">
    <input type="text" class="nv-input" placeholder="请输入关键字...">
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">错误状态</h5>
  <p class="doc-row__describe">用于校验失败后的提示</p>
  <div class="doc-row__body">
    <input type="text" class="nv-input nv-input--danger" placeholder="请输入关键字...">
  </div>
</div> 
```
:::

### 禁用
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <input type="text" class="nv-input" placeholder="请输入关键字..." disabled >
  </div>
</div>
```
:::

### 组合
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <div class="nv-input-group">
      <span class="nv-input-group__addon">https://</span>
      <input type="text" class="nv-input" placeholder="请输入域名...">
    </div>  
    <hr class="nv-hr" />
    <div class="nv-input-group">
      <input type="text" class="nv-input" placeholder="请输入子域名...">
      <span class="nv-input-group__addon">.vnnox.com</span>
    </div> 
  </div>
</div>
```
:::



### 尺寸
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">小尺寸</h5>
  <div class="doc-row__body">
    <input type="text" class="nv-input nv-input--small" placeholder="请输入关键字..." >
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">长文本</h5>
  <div class="doc-row__body">
    <textarea class="nv-input" rows="3" cols="40"></textarea>
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">自适应宽度</h5>
  <p class="doc-row__describe">使用<code>nv-fluid</code>类，可以使输入框在父级容器内自适应宽度</p>
  <div class="doc-row__body">
    <input type="text" class="nv-input nv-fluid" placeholder="请输入关键字...">
  </div>
</div>
```
:::
