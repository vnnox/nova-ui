# Alert 模态框

> Alert原生组件仅提供CSS基础样式，关闭等事件只在Vue组件中提供。

## 使用和示例

### 基础用法
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <div role="alert" class="nv-alert">
      <div class="nv-alert__inner">
        <span class="nv-alert__content">[default] 用于页面中展示重要的提示信息。</span>
      </div>  
    </div>
    <div role="alert" class="nv-alert nv-alert--info">
      <div class="nv-alert__inner">
        <span class="nv-alert__content">[info] 用于页面中展示重要的提示信息。</span>
      </div>  
    </div>
    <div role="alert" class="nv-alert nv-alert--success">
      <div class="nv-alert__inner">
        <span class="nv-alert__content">[success] 用于页面中展示重要的提示信息。</span>
      </div>  
    </div>
    <div role="alert" class="nv-alert nv-alert--error">
      <div class="nv-alert__inner">
        <span class="nv-alert__content">[error] 用于页面中展示重要的提示信息。</span>
      </div>  
    </div> 
    <div role="alert" class="nv-alert nv-alert--warning">
      <div class="nv-alert__inner">
        <span class="nv-alert__content">[warning] 用于页面中展示重要的提示信息。</span>
      </div>  
    </div>
  </div>  
</div> 
```
:::

### 带图标
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <div role="alert" class="nv-alert">
      <div class="nv-alert__inner">
        <span class="nv-alert__icon">
          <i class="nv-icon-circle-info"></i>
        </span>  
        <span class="nv-alert__content">用于页面中展示重要的提示信息。</span>
      </div>  
    </div>
    <div role="alert" class="nv-alert nv-alert--info">
      <div class="nv-alert__inner">
        <span class="nv-alert__icon">
          <i class="nv-icon-circle-info"></i>
        </span>
        <span class="nv-alert__content">用于页面中展示重要的提示信息。</span>
      </div>  
    </div>
    <div role="alert" class="nv-alert nv-alert--success">
      <div class="nv-alert__inner">
        <span class="nv-alert__icon">
          <i class="nv-icon-circle-check"></i>
        </span>
        <span class="nv-alert__content">用于页面中展示重要的提示信息。</span>
      </div>  
    </div>
    <div role="alert" class="nv-alert nv-alert--error">
      <div class="nv-alert__inner">
        <span class="nv-alert__icon">
          <i class="nv-icon-circle-close"></i>
        </span>
        <span class="nv-alert__content">用于页面中展示重要的提示信息。</span>
      </div>  
    </div> 
    <div role="alert" class="nv-alert nv-alert--warning">
      <div class="nv-alert__inner">
        <span class="nv-alert__icon">
          <i class="nv-icon-circle-warning"></i>
        </span>
        <span class="nv-alert__content">用于页面中展示重要的提示信息。</span>
      </div>  
    </div>
  </div>  
</div> 
```
:::

### 带关闭按钮
> 此处关闭按钮仅为CSS样式，具体事件仅在VUE组件中提供，原生组件不在提供。

:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <div role="alert" class="nv-alert nv-alert--info has-close">
      <div class="nv-alert__inner">
        <span class="nv-alert__icon">
          <i class="nv-icon-circle-info"></i>
        </span>  
        <span class="nv-alert__content">用于页面中展示重要的提示信息。</span>
        <button type="button" class="nv-alert__close" data-dismiss="alert" aria-label="Close"><i class="nv-icon-close"></i></button>
      </div>
    </div>
    <div role="alert" class="nv-alert nv-alert--info has-close">
      <div class="nv-alert__inner">
        <span class="nv-alert__icon">
          <i class="nv-icon-circle-info"></i>
        </span>
        <span class="nv-alert__content">用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。用于页面中展示重要的提示信息。</span>
        <button type="button" class="nv-alert__close" data-dismiss="alert" aria-label="Close"><i class="nv-icon-close"></i></button>  
      </div>
    </div>
  </div>  
</div> 
```
:::


## API

### 类名

| Class  |  Description  |
|---|---|
| `nv-alert`  | 基础类名  |
| `nv-alert--success`  | 成功样式  |
| `nv-alert--error`  | 错误样式  |
| `nv-alert--warning`  | 警告样式  |
| `has-close`  | 显示关闭按钮时使用  |

