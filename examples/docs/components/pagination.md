# Pagination 分页器

### 基础用法

:::demo
```html
<div class="doc-row">
  <p class="doc-row__describe">页数较少时</p>
  <div class="doc-row__body">
    <div id="ins1" style="max-width:760px;"></div>
  </div>  
</div>
<hr class="nv-hr" />
<div class="doc-row">
  <p class="doc-row__describe">页数较多时，显示<code>...</code>折叠</p>
  <div class="doc-row__body">
    <div id="ins2" style="max-width:760px;"></div>
  </div>  
</div>

<script>
  var ins1 = new Nova.Pagination(document.getElementById('ins1'),{
    total: 40
  })
  var ins2 = new Nova.Pagination(document.getElementById('ins2'),{
    total: 507,
    index: 6
  })
  window.instances.push(ins1, ins2)
</script>  
```
:::

### 多场景使用
:::demo
```html

<div class="doc-row">
  <h5 class="doc-row__title">显示总数</h5>
  <p class="doc-row__describe">显示总共多少条数据，通过修改语言包<code>共{total}条</code>可以自定义内容</p>
  <div class="doc-row__body">
    <div id="ins3"></div>
  </div>  
</div>
<hr class="nv-hr" />
<div class="doc-row">
  <h5 class="doc-row__title">调整每页显示条数</h5>
  <p class="doc-row__describe"><code>layout</code>配置项中包含<code>sizes</code>元件时，配合<code>sizes</code>配置项，可以切换每页显示的数量</p>
  <div class="doc-row__body">
    <div id="ins4"></div>
  </div>  
</div>
<hr class="nv-hr" />
<div class="doc-row">
  <h5 class="doc-row__title">直接前往</h5>
  <p class="doc-row__describe"><code>layout</code>配置项中包含<code>jumper</code>元件时，将开启页码跳转功能，可以快速跳转到某一页</p>
  <div class="doc-row__body">
    <div id="ins5"></div>
  </div>  
</div>
<div class="doc-row">
  <h5 class="doc-row__title">完整功能</h5>
  <p class="doc-row__describe">完整<code>layout</code>配置项包含<code>total, sizes, prev, pager, next, jumper</code>等6个元件，可以自定义组合以及调整其显示顺序</p>
  <div class="doc-row__body">
    <div id="ins6"></div>
  </div>  
</div>
<script>

  var ins3 = new Nova.Pagination(document.getElementById('ins3'),{
    total: 507,
    layout: 'total, prev, pager, next'
  })
  var ins4 = new Nova.Pagination(document.getElementById('ins4'),{
    total: 507,
    layout: 'sizes, prev, pager, next'
  })
  var ins5 = new Nova.Pagination(document.getElementById('ins5'),{
    total: 507,
    layout: 'jumper, prev, pager, next'
  })
  var ins6 = new Nova.Pagination(document.getElementById('ins6'),{
    total: 507,
    layout: 'total, sizes, prev, pager, next, jumper'
  })
  window.instances.push(ins3, ins4, ins5, ins6)
</script>  
```
:::