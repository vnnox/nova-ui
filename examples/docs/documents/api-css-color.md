# CSS/SCSS 颜色变量

```scss
@import '@vnnox/novaui/src/scss/base/color'
```

> UI组件样式文件(`*.scss`)中原则上禁止直接使用颜色值（不容易维护和更新），请使用以下颜色变量来替换。***请勿直接使用基础色系***，而应该使用它们的继承者。  

## 基础色系

> **基础色系请勿直接使用**，而是使用它们的继承色。基础色系用于颜色体系内部融合和继承。

:::demo
```html
<ul class="color-grids">
  <li class="grid">
    <span class="color-block" style="background: #257cef;">#257cef</span>
    <h5 class="color-name" style="color: #257cef;">$color-base--primary</h5>
    <p class="color-describe">主色</p>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #2fc25b;">#2fc25b</span>
    <h5 class="color-name" style="color: #2fc25b;">$color-base--success</h5>
    <p class="color-describe">成功</p>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #ff6c60;">#ff6c60</span>
    <h5 class="color-name" style="color: #ff6c60;">$color-base--error</h5>
    <p class="color-describe">失败</p>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #f89d34;">#f89d34</span>
    <h5 class="color-name" style="color: #f89d34;">$color-base--warning</h5>
    <p class="color-describe">警告</p>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #464c5b;">#464c5b</span>
    <h5 class="color-name" style="color: #464c5b;">$color-base--text</h5>
    <p class="color-describe">文字</p>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #e0eafa;">#e0eafa</span>
    <h5 class="color-name" style="color: #e0eafa;">$color-base--line</h5>
    <p class="color-describe">线条</p>
  </li>
</ul>  
```
:::


## 文字色系

> 文字色是系统内文字所使用的颜色。

:::demo
```html
<ul class="color-grids">
  <li class="grid">
    <span class="color-block" style="background: #464c5b;">#464c5b</span>
    <h5 class="color-name" style="color: #464c5b;">$color-title</h5>
    <p class="color-describe">标题</p>
    <a class="copy js-copy" data-text="$color-title">[copy]</a>
  </li>
  <li class="grid">
    <span class="color-block" style="background: #5196f2;">#5196f2</span>
    <h5 class="color-name" style="color: #5196f2;">$color-link</h5>
    <p class="color-describe">链接</p>
    <a class="copy js-copy" data-text="$color-link">[copy]</a>
  </li>
  <li class="grid">
    <span class="color-block" style="background: #257cef;">#257cef</span>
    <h5 class="color-name" style="color: #257cef;">$color-link--hover</h5>
    <p class="color-describe">链接hover</p>
    <a class="copy js-copy" data-text="$color-link--hover">[copy]</a>
  </li>
  <li class="grid">
    <span class="color-block" style="background: #464c5b;">#464c5b</span>
    <h5 class="color-name" style="color: #464c5b;">$color-text</h5>
    <p class="color-describe">正文、icon</p>
    <a class="copy js-copy" data-text="$color-text">[copy]</a>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #90949d;">#90949d</span>
    <h5 class="color-name" style="color: #90949d;">$color-text--describe</h5>
    <p class="color-describe">次要文字，辅助文案，提示</p>
    <a class="copy js-copy" data-text="$color-text--describe">[copy]</a>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #b5b7bd;">#b5b7bd</span>
    <h5 class="color-name" style="color: #b5b7bd;">$color-text--placeholder</h5>
    <p class="color-describe">输入框占位符文字</p>
    <a class="copy js-copy" data-text="$color-text--placeholder">[copy]</a>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #dadbde;">#dadbde</span>
    <h5 class="color-name" style="color: #dadbde;">$color-text--disabled</h5>
    <p class="color-describe">文字禁用</p>
    <a class="copy js-copy" data-text="$color-text--disabled">[copy]</a>
  </li>
</ul>  
```
:::


## 线条/背景色系

> 描述系统内的线条，背景等。

:::demo
```html
<ul class="color-grids">
  <li class="grid">
    <span class="color-block" style="background: #e0eafa; color: #464c5b;">#e0eafa</span>
    <h5 class="color-name" style="color: #464c5b;">$color-line</h5>
    <p class="color-describe">表格、基础控件描边、分割线默认颜色</p>
    <a class="copy js-copy" data-text="$color-line">[copy]</a>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #ced8e7; color: #464c5b;">#ced8e7</span>
    <h5 class="color-name" style="color: #464c5b;">$color-line--dark</h5>
    <p class="color-describe">加深描边，checkbox hover时</p>
    <a class="copy js-copy" data-text="$color-line--dark">[copy]</a>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #d7dee9; color: #464c5b;">#d7dee9</span>
    <h5 class="color-name" style="color: #464c5b;">$color-line--disabled</h5>
    <p class="color-describe">禁用时的描边</p>
    <a class="copy js-copy" data-text="$color-line--disabled">[copy]</a>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #ecf2fc; color: #464c5b;">#ecf2fc</span>
    <h5 class="color-name" style="color: #464c5b;">$color-table--hover</h5>
    <p class="color-describe">表格悬停、行选中</p>
    <a class="copy js-copy" data-text="$color-table--hover">[copy]</a>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #f3f7fd; color: #464c5b;">#f3f7fd</span>
    <h5 class="color-name" style="color: #464c5b;">$color-accordion--title</h5>
    <p class="color-describe">折叠面板title</p>
    <a class="copy js-copy" data-text="$color-accordion--title">[copy]</a>
  </li>
   <li class="grid">
    <span class="color-block" style="background: #f9fbfe; color: #464c5b;">#f9fbfe</span>
    <h5 class="color-name" style="color: #464c5b;">$color-table--head</h5>
    <p class="color-describe">表格头部、斑马线、侧边导航底色</p>
    <a class="copy js-copy" data-text="$color-table--head">[copy]</a>
  </li>
</ul>  
```
:::


## 主色系

> 主要系是蓝色主色的延伸系列颜色。

:::demo
```html
<ul class="color-grids">
  <li class="grid">
    <span class="color-block" style="background: #5196f2;">#5196f2</span>
    <h5 class="color-name" style="color: #5196f2;">$color-primary</h5>
    <p class="color-describe">强调按钮、文字按钮、链接</p>
    <a class="copy js-copy" data-text="$color-primary">[copy]</a>
  </li>
   <li class="grid">
     <span class="color-block" style="background: #257cef;">#257cef</span>
    <h5 class="color-name" style="color: #257cef;">$color-primary--hover</h5>
    <p class="color-describe">强调按钮、文字按钮、链接鼠标悬停</p>
    <a class="copy js-copy" data-text="$color-primary--hover">[copy]</a>
  </li>
   <li class="grid">
     <span class="color-block" style="background: #a8cbf9;">#a8cbf9</span>
    <h5 class="color-name" style="color: #a8cbf9;">$color-primary--disabled</h5>
    <p class="color-describe">强调按钮、文字按钮、链接禁用</p>
    <a class="copy js-copy" data-text="$color-primary--disabled">[copy]</a>
  </li>
  <li class="grid">
    <span class="color-block" style="background: #43a3fb;">#43a3fb</span>
    <h5 class="color-name" style="color: #43a3fb;">$color-primary--bg</h5>
    <p class="color-describe">大面积背景色，如导航栏</p>
    <a class="copy js-copy" data-text="$color-primary--bg">[copy]</a>
  </li>
</ul>  
```
:::

## 辅助色系

> 除了主色意外的场景色，用于表示不同的状态。

:::demo
```html
<ul class="color-grids">
  <li class="grid">
    <span class="color-block" style="background: #2fc25b;">#2fc25b</span>
    <h5 class="color-name" style="color: #2fc25b;">$color-success</h5>
    <p class="color-describe">成功，积极的线条，文字</p>
    <a class="copy js-copy" data-text="$color-success">[copy]</a>
  </li>
  <li class="grid">
      <span class="color-block" style="background: #ff6c60;">#ff6c60</span>
    <h5 class="color-name" style="color: #ff6c60;">$color-error</h5>
    <p class="color-describe">失败，消极的线条，文字</p>
    <a class="copy js-copy" data-text="$color-error">[copy]</a>
  </li>
  <li class="grid">
    <span class="color-block" style="background: #f89d34;">#f89d34</span>
    <h5 class="color-name" style="color: #f89d34;">$color-warning</h5>
    <p class="color-describe">警告性的线条，文字</p>
    <a class="copy js-copy" data-text="$color-warning">[copy]</a>
  </li>
  <li class="grid">
    <span class="color-block" style="background: #f2ffea; color: #2fc25b;">#f2ffea</span>
    <h5 class="color-name" style="color: #2fc25b;">$color-success--lighten</h5>
    <p class="color-describe">成功，积极的背景，如alert</p>
    <a class="copy js-copy" data-text="$color-success--lighten">[copy]</a>
  </li>
  <li class="grid">
     <span class="color-block" style="background: #ffedec; color: #ff6c60;">#ffedec</span>
    <h5 class="color-name" style="color: #ff6c60;">$color-error--lighten</h5>
    <p class="color-describe">失败，消极的背景，如alert</p>
    <a class="copy js-copy" data-text="$color-error--lighten">[copy]</a>
  </li>
  <li class="grid">
     <span class="color-block" style="background: #fff9e6; color: #f89d34;">#fff9e6</span>
    <h5 class="color-name" style="color: #f89d34;">$color-warning--lighten</h5>
    <p class="color-describe">警告性的背景，如alert</p>
    <a class="copy js-copy" data-text="$color-warning--lighten">[copy]</a>
  </li>
  <li class="grid">
     <span class="color-block" style="background: #e7f5fe; color: #5196f2;">#e7f5fe</span>
    <h5 class="color-name" style="color: #5196f2;">$color-info--lighten</h5>
    <p class="color-describe">提示性的背景，如alert</p>
    <a class="copy js-copy" data-text="$color-info--lighten">[copy]</a>
  </li>
</ul>  
```
:::