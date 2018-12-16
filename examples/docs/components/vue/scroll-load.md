# Pagination 分页器

## 使用和示例

### 基础用法

:::vue-demo
```html
<template>
  <nv-pagination :total="total" :index="index"></nv-pagination>
</template>
<script>
  export default {
    data() {
      return {
        total: 1000,
        index: 10
      }
    }
  }
</script>  
```
:::

### 多场景使用

:::vue-demo
```html
<template>
  <div>
    <div class="doc-row">
      <h5 class="doc-row__title">显示总数</h5>
      <div class="doc-row__body">
        <nv-pagination :total="total" :index="index1" layout="total,prev,pager,next" @change="onPage1Change"></nv-pagination>
      </div>  
    </div>
    <div class="doc-row">
      <h5 class="doc-row__title">调整每页显示条数</h5>
      <div class="doc-row__body">
        <nv-pagination :total="total" :index="index2" layout="sizes,prev,pager,next" @change="onPage2Change"></nv-pagination>
      </div>  
    </div>
    <div class="doc-row">
      <h5 class="doc-row__title">直接前往</h5>
      <div class="doc-row__body">
        <nv-pagination :total="total" :index="index3" layout="jumper,prev,pager,next" ></nv-pagination>
      </div>  
    </div>
  </div>  
</template>
<script>
  export default {
    data() {
      return {
        total: 1000,
        index1: 10,
        index2: 5,
        index3: 20
      }
    },
    methods: {
      onPage1Change (index) {
        this.index1 = index 
      },
      onPage2Change (index) {
        this.index2 = index 
      }
    }
  }
</script>  
```
:::


## API

### Props

同 `Native Options`


### Events

| Event  | Description | Parameters |
| ----------- | ----------- | ----------- |
| change | 当值改变时触发 | (index, limit, pages) |