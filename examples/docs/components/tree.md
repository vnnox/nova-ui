# Tree 树

## 使用和示例

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
          label: '<script>alert(1)<\/script>',
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


## API

### Attributes

| Attribute   | Description | Type |  Default Values |
|---|---|---|---|
| `data` | tree数据 | array | `[]` |
| `disabled` | 禁用tree | boolean | false |
| `labelRender` | 渲染器,可用来自定义渲染Node节点Html | function | -- |
| `indent`|  缩进 | number | 16 |
| `checkable`|  是否可选择，显示复选/单选框 | boolean | false |
| `radio`|  是否单选, 默认复选 | boolean | false |
| `checkName`|  选择框的name值，原生属性 | string | -- |
| `checkStrictly`|  checkable状态下节点选择完全受控（父子节点选中状态不再关联） | boolean | false |
| `nodeClickCheck`|  是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中/反选中节点。 | boolean | false |
| `expandAll`|  是否展开所有节点 | boolean | false |
| `highlight`|  高亮当前节点的label | boolean | false |
| `nodeFilter`| 用于搜索时过滤node节点，返回true时表示该节点被匹配 | function | false |
| `defaultCheckedKeys`| 默认选中的节点ids | array | `[]` |
| `defaultExpandedKeys`| 默认展开的节点ids | array |  `[]` |
| `noDataText`| 节点为空时显示的文本 | string | -- |
| `noMatchDataText`| 无匹配节点时显示的文本 | string | -- |



### Node
> 每个Tree有一个或多个Node节点构成，每个Node节点具有以下属性

| Attribute   | Description | Type |  Default Values |
|---|---|---|---|
| `id` | `required`节点ID | string |  -- |
| `label` | 节点名称 | string | -- |
| `checked` | 节点是否选中 | boolean | false |
| `disabled` | 节点是否禁用 | boolean | false |
| `expanded` | 节点是否展开 | boolean | false |
| `children` | 子节点 | array `[]Node` | null |


### Methods

| Method  | Description | Parameters |
|---|---|---|
| `setNodesTree` | 将节点数组转换为tree | (data:array) |
| `arrayToNodes` | 将数组转换为节点组 | (data:array) |
| `objectToTree` | 将对象转换为树结构 | (object) |
| `filter` | 过滤树结构,并且返回匹配的结果总数 | (keyword):number |
| `getNode` | 获取Node节点 | (node) |
| `appendNode` | 向parent中插入子节点 | (parent, node) |
| `removeNode` | 移除指定的节点 | (node, deep = true) |
| `getCheckedNodes` | 获取选中的节点，参数为`true`时会返包含禁用的选中项，否则仅返回可用的选中项 | (useDisabled?:boolean):`[]Node` |
| `destroy` | 销毁实例 | -- | 


### Events

| Event  | Description | Parameters |
|---|---|---|
| `check` | 当节点选中或取消选中时触发 | (node:Node, $parent:HTMLElement) |
| `click` | 当节点被点击时触发 | (node:Node, $parent:HTMLElement) |
| `expend` | 当节点展开或折叠时触发 | (expanded:boolean, node:Node, $parent:HTMLElement) |
| `selected` | 当节点被选中或取消选中时触发 | (node:Node, $parent:HTMLElement) |