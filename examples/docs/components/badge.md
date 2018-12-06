# Badge 徽标

## 使用和示例

> 由于chrome不支持10px字体，因此该类在设计上，将字体设置为20px，以及内间距，高度都放大两倍，然后整体缩小为0.5倍实现

### 基础用法
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">默认样式</h5>
  <div class="doc-row__body">
    <button class="nv-btn">
      我的购物车
      <sup class="nv-badge">3</sup>
    </button> 
    <button class="nv-btn">
      我的购物车
      <sup class="nv-badge">99+</sup>
    </button> 
    <button class="nv-btn">
      我的购物车
      <sup class="nv-badge">New</sup>
    </button>  
  </div>
</div>
```
:::

## API
### 类名

| Class  |  Description  |
|---|---|
| `nv-badge`  | 基础类名  |