# Javascript 模板类

```javascript
import Template '@vnnox/novaui/src/utils/template'
```

### 语法
```javascript
Template(content:string, options?:Object):string
```


### 模板语法
- `<% %>` 包含在内的内容会被编译为JavaScript语法，可以使`if, for`等任何可执行的JavaScript语法
- `<%= %>` 包含在内的内容都会被当做变量被输出


### 定义模板内容

```javascript
const skeletonTpl = `
<div class="some-class">
  <% if(name) {%>
  <%= name%>
  <% }%>
</div>
`
```

### 渲染
```javascript
Template(skeletonTpl, {
  name: 'smohan'
})
```



