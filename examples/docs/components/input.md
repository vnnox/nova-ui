# Input 输入框

## 使用和示例

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
    <input type="text" class="nv-input nv-input--error" placeholder="请输入关键字...">
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
    <hr class="nv-hr" />
    <div class="nv-input-row">
      <div class="nv-input-cell" id="demo-select" style="width:105px;"></div>
      <input type="text" class="nv-input nv-input-cell nv-fluid" placeholder="请输入详细地址...">
    </div> 
  </div>
</div>
<script>
  var options = [{
    value: '0086',
    label: '中国'
  }, {
    value: '001',
    label: '加拿大'
  }, {
    value: '0049',
    label: '德国'
  }, {
    value: '00853',
    label: '澳门'
  }, {
    value: '0052',
    label: '墨西哥'
  }]
  var ins1 = new Nova.Select(document.getElementById('demo-select'), {
    value: '0049',
    options: options,
  })
  window.instances.push(ins1)
</script>  
```
:::

### 带图标
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <h5 class="doc-row__title">前置图标</h5>
    <label class="nv-input-prefix">
      <input type="text" class="nv-input" placeholder="请输入关键字...">
      <span class="nv-input__icon">
        <i class="nv-icon-search"></i>
      </span>
    </label>  

    <hr class="nv-hr" />
    <h5 class="doc-row__title">后置图标</h5>

    <label class="nv-input-suffix">
      <input type="text" class="nv-input" placeholder="请输入关键字...">
      <span class="nv-input__icon">
        <i class="nv-icon-search"></i>
      </span>
    </label>  
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


## API

### 基础类名

| Class  |  Description  |
|---|---|
| `nv-input`  | 基础类名  |
| `nv-input--success`  | 成功  | 
| `nv-input--error`  | 错误  | 
| `nv-btn--small`  | 小型尺寸  | 


### 组合类名

| Class  |  Description  |
|---|---|
| `nv-input-group`  | 基础类名  |
| `nv-input-group__addon`  | 输入框一侧额外元素  | 
| `nv-input-row`  |  组合二基础类名  |
| `nv-input-cell`  | 组合二子元素  | 

### 带图标

| Class  |  Description  |
|---|---|
| `nv-input-prefix`  | 带前置图标基础类名  |
| `nv-input-suffix`  | 带后置图标基础类名  | 
| `nv-input__icon`  |  图标子元素类名  |


### 状态类

| Class  |  Description  |
|---|---|
| `nv-disabled`  | 禁用  | 
| `nv-fluid`  | 输入框自适应宽度  | 