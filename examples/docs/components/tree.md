# Tree 树


### 基础用法
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">树结构展示</h5>
  <p class="doc-row__describe">基础的树形结构展示</p>
  <div class="doc-row__body">
    <div id="ins1"></div>
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">可选择</h5>
  <p class="doc-row__describe">在需要选择(单选/复选)数据时使用</p>
  <div class="doc-row__body">
    <div class="doc-cells">
      <div class="doc-cell" style="width:45%;">
        <h6>复选</h6>
        <div id="ins2"></div>
      </div>
      <div class="doc-cell">
        <h6>单选</h6>
        <div id="ins3"></div>
      </div>
    </div>
  </div>
</div>
<script>
  var data = [
    {
      id: '110000',
      label: '北京市',
      children: [
        {
          id: '110101',
          label: '东城区',
        },
        {
          id: '110102',
          label: '西城区',
        },
        {
          id: '110105',
          label: '朝阳区',
        },
        {
          id: '110108',
          label: '海淀区',
        }
      ]
    },
    {
      id: '610000',
      label: '陕西省',
      children: [
        {
          id: '610100',
          label: '西安市',
          children: [
            {
              id: '610112',
              label: '未央区'
            },
            {
              id: '610103',
              label: '碑林区'
            },
            {
              id: '610104',
              label: '莲湖区'
            },
            {
              id: '610113',
              label: '雁塔区'
            },
            {
              id: '610116',
              label: '长安区'
            }
          ]
        },
        {
          id: '610600',
          label: '延安市',
          children: [
            {
              id: '610602',
              label: '宝塔区'
            },
            {
              id: '610603',
              label: '安塞区'
            },
            {
              id: '610621',
              label: '延长县'
            }
          ]
        },
      ]
    }
  ];
  var ins1 = new Nova.Tree(document.getElementById('ins1'), {
    data: data[1],
  })
  var ins2 = new Nova.Tree(document.getElementById('ins2'), {
    data: data,
    checkable: true
  })
  var ins3 = new Nova.Tree(document.getElementById('ins3'), {
    data: data,
    checkable: true,
    radio: true
  })

  // 回收示例
  window.instances.push(ins1, ins2, ins3)
</script>  
```
:::

### 默认展开和默认选中
:::demo
```html
<div class="doc-row">
  <p class="doc-row__describe">
    通过配置项<code>expandAll</code>可控制是否默认展开全部节点。
    <br>设置指定节点展开/选中有两种方式：
    <ol>
      <li>设置当前节点的<code>expanded/checked</code>值为<code>true</code></li>
      <li>设置配置项<code>defaultExpandedKeys/defaultCheckedKeys</code>来指定需要展开的节点ID</li>
    </ol>  
  </p>
  <div class="doc-row__body">
    <div class="doc-cells">
      <div class="doc-cell" style="width:45%;">
        <h6>全部展开</h6>
        <div id="ins4"></div>
      </div>
      <div class="doc-cell">
        <h6>指定展开项</h6>
        <div id="ins5"></div>
      </div>
    </div>
  </div>
</div>
<script>
  var data = [
    {
      id: '610000',
      label: '陕西省',
      children: [
        {
          id: '610100',
          label: '西安市',
          children: [
            {
              id: '610112',
              label: '未央区'
            },
            {
              id: '610103',
              label: '碑林区',
              checked: true
            },
            {
              id: '610104',
              label: '莲湖区'
            },
            {
              id: '610113',
              label: '雁塔区'
            },
            {
              id: '610116',
              label: '长安区'
            }
          ]
        },
        {
          id: '610600',
          label: '延安市',
          children: [
            {
              id: '610602',
              label: '宝塔区'
            },
            {
              id: '610603',
              label: '安塞区'
            },
            {
              id: '610621',
              label: '延长县'
            }
          ]
        },
      ]
    }
  ];
  var ins4 = new Nova.Tree(document.getElementById('ins4'), {
    data: data,
    checkable: true,
    expandAll: true,
    defaultCheckedKeys: ['610112', '610116']
  })
  var ins5 = new Nova.Tree(document.getElementById('ins5'), {
    data: data,
    checkable: true,
    defaultCheckedKeys: ['610112', '610116'],
    defaultExpandedKeys: ['610000', '610100']
  })

  // 回收示例
  window.instances.push(ins4, ins5)
</script>  
```
:::

### 组件禁用和选项禁用
:::demo
```html
<div class="doc-row">
  <p class="doc-row__describe">
    通过配置项<code>disabled</code>可禁用整个组件。
    通过对具体节点设置<code>disabled</code>属性，可控制该节点的禁用状态。 
  </p>
  <div class="doc-row__body">
    <div class="doc-cells">
      <div class="doc-cell" style="width:45%;">
        <h6>组件禁用</h6>
        <div id="ins6"></div>
      </div>
      <div class="doc-cell">
        <h6>指定展开项</h6>
        <div id="ins7"></div>
      </div>
    </div>
  </div>
</div>
<script>
  var data = [
    {
      id: '610000',
      label: '陕西省',
      children: [
        {
          id: '610100',
          label: '西安市',
          children: [
            {
              id: '610112',
              label: '未央区'
            },
            {
              id: '610103',
              label: '碑林区',
              checked: true,
              disabled: true
            },
            {
              id: '610104',
              label: '莲湖区'
            },
            {
              id: '610113',
              label: '雁塔区',
              disabled: true
            },
            {
              id: '610116',
              label: '长安区'
            }
          ]
        },
      ]
    }
  ];
  var ins6 = new Nova.Tree(document.getElementById('ins6'), {
    data: data,
    checkable: true,
    expandAll: true,
    disabled: true
  })
  var ins7 = new Nova.Tree(document.getElementById('ins7'), {
    data: data,
    checkable: true,
    expandAll: true,
  })

  // 回收示例
  window.instances.push(ins6, ins7)
</script>  
```
:::

### 节点过滤
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">filter</h5>
  <p class="doc-row__describe">通过配置项<code>nodeFilter</code>和调用实例的<code>filter</code>方法，可以过滤节点。<code>filter</code>方法返回通过并且匹配<code>nodeFilter</code>的节点的个数</p>
  <div class="doc-row__body">
    <div id="ins8">
      <label>
        <input type="text" class="nv-input" id="search-value">
        <button type="button" class="nv-btn nv-btn--primary" id="search-btn">搜索</button>
      </label>  
    </div>
  </div>
</div>
<script>
  var data = [
    {
      id: '110000',
      label: '北京市',
      children: [
        {
          id: '110101',
          label: '东城区 - 子1-1',
        },
        {
          id: '110102',
          label: '西城区 - 子1-2',
        },
        {
          id: '110105',
          label: '朝阳区 - 子1-3',
        },
        {
          id: '110108',
          label: '海淀区 - 子1-4',
        }
      ]
    },
    {
      id: '610000',
      label: '陕西省',
      children: [
        {
          id: '610100',
          label: '西安市 - 子2-1',
          children: [
            {
              id: '610112',
              label: '未央区 - 子2-1-1'
            },
            {
              id: '610103',
              label: '碑林区 - 子2-1-2'
            },
            {
              id: '610104',
              label: '莲湖区 - 子2-1-3'
            },
            {
              id: '610113',
              label: '雁塔区 - 子2-1-4'
            },
            {
              id: '610116',
              label: '长安区 - 子2-1-5'
            }
          ]
        },
      ]
    }
  ];
  var ins8 = new Nova.Tree(document.getElementById('ins8'), {
    data: data,
    expandAll: true,
    nodeFilter(node, value) {
      return node.label.indexOf(value) !== -1
    }
  })
  var $value = document.getElementById('search-value')
  document.getElementById('search-btn').onclick = function () {
    var keyword = $value.value
    var matchedNodesCount = ins8.filter(keyword)
  }
  // 回收示例
  window.instances.push(ins8)
</script>  
```
:::

### 自定义显示内容
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">树结构展示</h5>
  <p class="doc-row__describe">基础的树形结构展示</p>
  <div class="doc-row__body">
    <div id="ins10"></div>
  </div>
</div>
<script>
  var data = [
    {
      id: '110000',
      label: '北京市',
      children: [
        {
          id: '110101',
          label: '东城区',
        },
        {
          id: '110102',
          label: '西城区',
        },
        {
          id: '110105',
          label: '朝阳区',
        },
        {
          id: '110108',
          label: '海淀区',
        }
      ]
    },
  ];

  var $container = document.getElementById('ins10')
  var ins10 = new Nova.Tree($container, {
    data: data,
    labelRender(node) {
      var html = node.label
      html += `
      <div style="float:right; margin-left: 100px;">
        <a class="js-action nv-event-stop" data-action="append" data-node-id="${node.id}">Append</a>
        <span>|</span>
        <a class="js-action nv-event-stop" data-action="remove" data-node-id="${node.id}">Remove</a>
      </div>
      `
      return html
    }
  })
 
  Nova.$Dom.bind($container, 'click', Nova.$Dom.proxy($container, '.js-action', function(e) {
    var action = this.getAttribute('data-action')
    var id = this.getAttribute('data-node-id')
    if (action === 'append') {
      ins10.appendNode(id, {
        label: 'new Node'
      })
    } else {
      ins10.removeNode(id)
    }
  }))

  // 回收示例
  window.instances.push(ins10)
</script>  
```
:::