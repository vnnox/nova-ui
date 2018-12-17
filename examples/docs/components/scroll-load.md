# VirtualScrollList 虚拟滚动列表

## 使用和示例

### 基础用法

:::demo
```html
<div class="doc-row">
  <h4 class="doc-row__title">数据使用mock模拟</h4>
  <div class="doc-row__body">
    <div id="ins" style="height: 500px; overflow-y:auto;">
      <div id="content" class="content"></div>
      <div id="loading" class="nv-text-center">加载中，请稍后</div>
    </div>
  </div>  
</div>

<script>
  var $wrapper = document.getElementById('ins')
  var $content = document.getElementById('content')
  var $loading = document.getElementById('loading')
  var pageIndex = 1
  var limit = 100
  var total = 500
  var pages = Math.ceil(total / limit)
  var loading = false
  var dataLoaded = false

  var ins1 = new Nova.VirtualScrollList($wrapper, {
    rowHeight: 120,
    render(rows) {
      render(rows)
    }
  })

  ins1.on('onBottom', () => {
    dataLoaded = !(pageIndex + 1 < pages)
    if (!loading && !dataLoaded) {
      pageIndex++
      getList()
    }
  })

  
  function render (list) {
    var html = ''
    for (var i = 0, len = list.length; i < len; i++) {
      var item = list[i]
      html += `
        <div class="scroll-demo-item">
          <img src="${item.image}">
          <div class="scroll-demo-item__info">
            <h3>${item.title}</h3>
            <p>${item.cparagraph}</p>
            <p>${item.url}</p>
          </div>
        </div>
      `
    }
    $content.innerHTML = html
  }


  function getList (page) {
    loading = true
    $loading.classList.remove('nv-hide')
    fetch('https://easy-mock.com/mock/5c14b3fa1ee30f317685ba86/example/mock')
      .then(response => response.json())
      .then(data => {
        var list = data.data.projects
        if (pageIndex === 1) {
          ins1.reset(list)
        } else {
          ins1.push(list)
          ins1.refresh(true)
        }
        setTimeout(function() {
           loading = false
           if (dataLoaded) {
             $loading.innerHTML = '没有更多数据了...'
           } else {
             $loading.classList.add('nv-hide')
           }
        }, 200)
      })
  }

  getList()


  window.instances.push(ins1)
</script>  
```
:::



## API

### Layouts

> 多个元件使用数组或者逗号分隔，元件顺序就是布局顺序

| Name |  Description |
| ----------- | ----------- | 
| total |  共 {total} 条, 第{index}/{pages}页 |
| prev |  上一页按钮 |
| pager |  数字分页器 |
| next |  下一页按钮 |
| sizes |  limit选择器 |
| jumper |  跳转到page页 |


### Options
| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| lang | 多语言 | string | -- |
| total | 总条目数 | number | -- |
| limit | 每页显示条数 | number | 10 |
| index | 当前页码 | number | 1 |
| visible | 可见页码数量。当总页数超过该值时其他页码会隐藏，必须是奇数 | number< 5 - 21> | 5 |
| ellipsis | 是否显示截断点，当总页码超过visible数时，其他页码会被显示为... | boolean | true |
| layout | 元件布局,按照原件顺序自动布局 | string<`'total', 'prev', 'pager', 'next', 'sizes', 'jumper'`> | `prev, pager, next` |
| prevText | 上一页按钮显示文本,默认为箭头 | string | `default` |
| nextText | 下一页按钮显示文本,默认为箭头 | string | `default` |
| sizes | limit数选择器，可选的每页显示条目数 | array | `[10, 20, 50, 100]` |
| customClass | 自定义样式名称，多样式以逗号`,`分隔 | string | -- |


### Methods
| Method  | Description | Parameters |
| ----------- | ----------- | ----------- |
| setTotal | 设置总记录数 | (total:number) |
| setIndex | 设置当前页码 | (index:number) |
| setLimit | 设置每页显示条数 | (limit:number) |
| destroy | 销毁实例`销毁后，实例将完全不可用` | -- |


### Events

| Event  | Description | Parameters |
| ----------- | ----------- | ----------- |
| change | 当值改变时触发 | (index, limit, pages) |