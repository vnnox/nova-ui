# Tree 树

## 使用和示例

### 基础用法

:::vue-demo
```html
<template>
  <div class="doc-row">
    <h5 class="doc-row__title">基础的树形结构展示</h5>
    <p class="doc-row__describe">可用于基础树结构展示/复选/单选</p>
    <div class="doc-row__body">
      <div class="doc-cells">
        <div class="doc-cell" style="width:30%;">
          <nv-tree :data="data" expand-all></nv-tree>
        </div>
        <div class="doc-cell" style="width:30%;">
          <nv-tree :data="data2" checkable expand-all></nv-tree>
        </div>
        <div class="doc-cell" style="width:30%;">
          <nv-tree :data="data3" checkable radio expand-all></nv-tree>
        </div>  
      </div>   
    </div>
  </div>
</template>
<script>
  const TreeData = {
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
  export default {
    data() {
      return {
        data: JSON.parse(JSON.stringify(TreeData)),
        data2: JSON.parse(JSON.stringify(TreeData)),
        data3: JSON.parse(JSON.stringify(TreeData))
      }
    },
    mounted () {
      // setTimeout(() => {
      //   this.data = [
      //     {
      //       id: '610602',
      //       label: '宝塔区'
      //     }
      //   ]
      // }, 2000)
    }
  }
</script>  
```
:::


### 选中和禁用
:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <nv-tree :data="data" checkable expand-all></nv-tree>
    </div>
  </div>
</template>
<script>
  const TreeData = {
    id: '610000',
    label: '陕西省',
    disabled: true,
    children: [
      {
        id: '610100',
        label: '西安市',
        children: [
          {
            id: '610112',
            label: '未央区',
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
            checked: true
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
            label: '宝塔区',
            disabled: true
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
  export default {
    data() {
      return {
        data: JSON.parse(JSON.stringify(TreeData))
      }
    }
  }
</script>  
```
:::

### 过滤

:::vue-demo
```html
<template>
  <div class="doc-row">
    <p class="doc-row__describe">需要提供<code>nodeFilter</code>方法</p>
    <div class="doc-row__body">
      <label style="min-width: 500px;">
        <input type="text" v-model.lazy="keyword" class="nv-input nv-fluid" placeholder="输入关键字后回车搜索" @change="onChange">
      </label>  
      <nv-tree :data="data" :node-filter="nodeFilter" no-match-data-text="no match nodes..." expand-all ref="tree"></nv-tree>
    </div>
  </div>
</template>
<script>
  const TreeData = {
    id: '610000',
    label: '陕西省',
    children: [
      {
        id: '610100',
        label: '西安市',
        children: [
          {
            id: '610112',
            label: '未央区',
          },
          {
            id: '610103',
            label: '碑林区',
          },
          {
            id: '610104',
            label: '莲湖区'
          },
          {
            id: '610113',
            label: '雁塔区',
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
            label: '宝塔区',
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
  export default {
    data() {
      return {
        keyword: '',
        data: JSON.parse(JSON.stringify(TreeData)),
      }
    },
    methods: {
      nodeFilter(node, value) {
        return node.label.indexOf(value) !== -1
      },
      onChange () {
        this.$refs.tree.filter(this.keyword)
      }
    },
  }
</script>  
```
:::


## API

### Attributes

同 `Native`

### Methods
> Vue组件暂时仅支持如下方法

- `filter`
- `appendNode`
- `removeNode`
- `getCheckedNodes`

### Events

> Vue组件暂时仅支持如下方法

- `click`
- `expend`
- `check`