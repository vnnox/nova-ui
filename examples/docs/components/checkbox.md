# Checkbox 复选框

## 使用和示例

### 基础用法
:::demo
```html
<div class="doc-row">
  <p class="doc-row__describe"></p>
  <div class="doc-row__body">
    <label class="nv-checkbox" role="checkbox" tabindex="0">
      <input type="checkbox">
      <i class="nv-checkbox__icon"></i>
      <span class="nv-checkbox__label">初始状态</span>
    </label>
    <label class="nv-checkbox" role="checkbox" tabindex="0">
      <input type="checkbox" checked>
      <i class="nv-checkbox__icon"></i>
      <span class="nv-checkbox__label">选中状态</span>
    </label>
    <label class="nv-checkbox" role="checkbox">
      <input type="checkbox" disabled>
      <i class="nv-checkbox__icon"></i>
      <span class="nv-checkbox__label">初始禁用</span>
    </label>
    <label class="nv-checkbox" role="checkbox">
      <input type="checkbox" checked disabled>
      <i class="nv-checkbox__icon"></i>
      <span class="nv-checkbox__label">选中禁用</span>
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
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox">
        <span class="nv-check__btn">周日</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" checked>
        <span class="nv-check__btn">周一</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" checked>
        <span class="nv-check__btn">周二</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled>
        <span class="nv-check__btn">周三</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled checked>
        <span class="nv-check__btn">周四</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox">
        <span class="nv-check__btn">周五</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox">
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
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox">
        <span class="nv-check__btn">周日</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" checked>
        <span class="nv-check__btn">周一</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" checked>
        <span class="nv-check__btn">周二</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled>
        <span class="nv-check__btn">周三</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled checked>
        <span class="nv-check__btn">周四</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox">
        <span class="nv-check__btn">周五</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox">
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
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox">
        <span class="nv-check__btn">周日</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" checked>
        <span class="nv-check__btn">周一</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" checked>
        <span class="nv-check__btn">周二</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled>
        <span class="nv-check__btn">周三</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled checked>
        <span class="nv-check__btn">周四</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox">
        <span class="nv-check__btn">周五</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox">
        <span class="nv-check__btn">周六</span>
      </label>
    </div>
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">全部禁用</h5>
  <p class="doc-row__describe"></p>
  <div class="doc-row__body">
    <div class="nv-check-group nv-check--small">
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled>
        <span class="nv-check__btn">周日</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled>
        <span class="nv-check__btn">周一</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled>
        <span class="nv-check__btn">周二</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled>
        <span class="nv-check__btn">周三</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled>
        <span class="nv-check__btn">周四</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled>
        <span class="nv-check__btn">周五</span>
      </label>
      <label role="checkbox" class="nv-check-item">
        <input type="checkbox" disabled>
        <span class="nv-check__btn">周六</span>
      </label>
    </div>
  </div>
</div>
```
:::

## API

### 复选框类

| Class  |  Description  |
|---|---|
| `nv-checkbox`  | 基础类名  |

### 复选框组类

| Class  |  Description  |
|---|---|
| `nv-check-group`  | 复选框组类名，用于包裹多个复选框  |
| `nv-check-item`  | 复选框类名  | 
| `nv-check__btn`  | 复选框按钮类名  | 
