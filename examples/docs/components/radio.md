# Radio 单选框

## 使用和示例

### 基础用法
:::demo
```html
<div class="doc-row">
  <p class="doc-row__describe"></p>
  <div class="doc-row__body">
    <label class="nv-radio" role="radio" tabindex="0">
      <input type="radio" name="demo0" value="1">
      <i class="nv-radio__icon"></i>
      <span class="nv-radio__label">初始状态</span>
    </label>
    <label class="nv-radio" role="radio" tabindex="0">
      <input type="radio" name="demo0" value="2" checked>
      <i class="nv-radio__icon"></i>
      <span class="nv-radio__label">选中状态</span>
    </label>
    <label class="nv-radio" role="radio">
      <input type="radio"  name="demo01" value="1" disabled>
      <i class="nv-radio__icon"></i>
      <span class="nv-radio__label">初始禁用</span>
    </label>
    <label class="nv-radio" role="radio">
      <input type="radio"  name="demo01" value="2" checked disabled>
      <i class="nv-radio__icon"></i>
      <span class="nv-radio__label">选中禁用</span>
    </label>   
  </div>
</div>
```
:::

### 按钮样式
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">按钮样式一</h5>
  <p class="doc-row__describe"></p>
  <div class="doc-row__body">
    <div class="nv-check-group">
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo1" value="0">
        <span class="nv-check__btn">周日</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo1" value="1">
        <span class="nv-check__btn">周一</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo1" value="2" disabled>
        <span class="nv-check__btn">周二</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo1" value="3">
        <span class="nv-check__btn">周三</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo1" value="4">
        <span class="nv-check__btn">周四</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo1" value="5" checked>
        <span class="nv-check__btn">周五</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo1" value="6">
        <span class="nv-check__btn">周六</span>
      </label>
    </div>
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">按钮样式二</h5>
  <p class="doc-row__describe"></p>
  <div class="doc-row__body">
    <div class="nv-check-group nv-check--primary">
     <label role="radio" class="nv-check-item">
        <input type="radio" name="demo2" value="0">
        <span class="nv-check__btn">周日</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo2" value="1" disabled>
        <span class="nv-check__btn">周一</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo2" value="2">
        <span class="nv-check__btn">周二</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo2" value="3" checked>
        <span class="nv-check__btn">周三</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo2" value="4">
        <span class="nv-check__btn">周四</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo2" value="5">
        <span class="nv-check__btn">周五</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo2" value="6">
        <span class="nv-check__btn">周六</span>
      </label>
    </div>
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">小尺寸</h5>
  <p class="doc-row__describe"></p>
  <div class="doc-row__body">
    <div class="nv-check-group nv-check--small">
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo3" value="0">
        <span class="nv-check__btn">周日</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo3" value="1">
        <span class="nv-check__btn">周一</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo3" value="2">
        <span class="nv-check__btn">周二</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo3" value="3">
        <span class="nv-check__btn">周三</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo3" value="4">
        <span class="nv-check__btn">周四</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo3" value="5">
        <span class="nv-check__btn">周五</span>
      </label>
      <label role="radio" class="nv-check-item">
        <input type="radio" name="demo3" value="6">
        <span class="nv-check__btn">周六</span>
      </label>
    </div>
  </div>
</div>
```
:::


## API

### 单选框类

| Class  |  Description  |
|---|---|
| `nv-radio`  | 基础类名  |

### 单选框组类

| Class  |  Description  |
|---|---|
| `nv-check-group`  | 单选框组类名，用于包裹多个单选框  |
| `nv-check-item`  | 单选框类名  | 
| `nv-check__btn`  | 单选框按钮类名  | 
