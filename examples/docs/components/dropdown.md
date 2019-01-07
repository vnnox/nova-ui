# Dropdown 下拉面板

## 使用和示例

> Dropdown原生组件仅提供CSS基础样式，相关等操作事件只在Vue组件中提供。


### 基础用法
:::demo
```html
<div class="doc-row">
  <div class="doc-row__body">
    <div x-placement="bottom-start" class="nv-dropdown nv-dropdown--show">
      <div class="nv-dropdown__toggle"><button type="button" class="nv-btn">Button</button></div>
      <div class="nv-dropdown__body">
        <ul class="nv-dropmenu">
          <li class="nv-dropmenu__item">
            <div class="item-inner">选项一</div>
          </li>
          <li class="nv-dropmenu__item is-sub">
            <div class="item-inner">选项二</div>
            <ul class="nv-dropmenu">
              <li class="nv-dropmenu__item">
                <div class="item-inner">选项一</div>
              </li>
              <li class="nv-dropmenu__item">
                <div class="item-inner">选项一</div>
              </li>
            </ul>
          </li>
          <li class="nv-dropmenu__item is-divider"></li>
          <li class="nv-dropmenu__item">
            <div class="item-inner">选项二</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
```
:::


## 基础模板
```html
<div class="nv-dropdown">
  <div class="nv-dropdown__toggle">这里是Toggle按钮</div>
  <div class="nv-dropdown__body">这里显示下拉内容</div>
</div>
```

## 下拉目录
```html
<div class="nv-dropdown">
  <div class="nv-dropdown__toggle">这里是Toggle按钮</div>
  <div class="nv-dropdown__body">
    <ul class="nv-dropmenu">
      <li class="nv-dropmenu__item">
        <div class="item-inner">一级目录</div>
      </li>
      <!-- 分隔符 -->
      <li class="nv-dropmenu__item is-divider"></li>
      <li class="nv-dropmenu__item is-sub">
        <div class="item-inner">一级目录</div>
        <ul class="nv-dropmenu">
          <li class="nv-dropmenu__item">
            <div class="item-inner">二级目录</div>
          </li>
          <li class="nv-dropmenu__item">
            <div class="item-inner">二级目录</div>
          </li>
        </ul>
      </li>
    </ul>  
  </div>
</div>
```



