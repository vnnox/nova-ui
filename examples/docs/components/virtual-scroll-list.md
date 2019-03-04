# VirtualScrollList 虚拟滚动列表

> 在滚动列表中，只渲染视图中可见的数据。

![示例](https://exp-team.github.io/bimg/s3.gif)

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

  function renderItem (item) {
    return `
        <img src="${item.image}">
        <div class="scroll-demo-item__info">
          <h3>${item.title}</h3>
          <p>${item.cparagraph}</p>
          <p>${item.url}</p>
        </div>
      `
  }

  function render (list) {
    var html = ''
    for (var i = 0, len = list.length; i < len; i++) {
      var item = list[i]
      html += '<div class="scroll-demo-item">'
      html += renderItem(item)
      html += '</div>'
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
        try {
          if (pageIndex === 1) {
            ins1.reset(list)
          } else {
            ins1.push(list)
            ins1.refresh(true)
          }
        } catch(e) {}
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


### Options
| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| content | rows容器 | `<string / HTMLElement>` | `.content` |
| rowHeight | 每行对的高度，必须固定高度，包括内外边距 | number | 40 |
| offset | 偏移数，默认实际可见个数，实际渲染数 = visibleNum + offset | number | `auto` |
| key | 每行数据的唯一标识字段, 用于删除数据或者更新数据时查找 | number | `id` |
| threshold | 滚动到顶或者滚动到底的阈值 | number | 100 |



### Methods
| Method  | Description | Parameters |
| ----------- | ----------- | ----------- |
| reset | 重置列表，如搜索列表后导致列表数据完全变化后 | (newList:array) |
| refresh | 重新渲染当前可视区域，可传入`force:true`强制渲染 | (force:boolean)  |
| push | 向列表中追加数据 | (data:array / object) |
| remove | 从列表中移除数据 | (key:string) |
| update | 更新列表中的数据 | (key:string, data: object) |
| remove | 销毁实例`销毁后，实例将完全不可用` | -- |


### Events

| Event  | Description | Parameters |
| ----------- | ----------- | ----------- |
| onTop | 当滚动到顶部阈值处时触发 | (event: ScrollEvent) |
| onBottom | 当滚动到底部阈值处时触发，此时可以做加载新数据的操作 | (event: ScrollEvent) |