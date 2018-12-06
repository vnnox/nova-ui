# Popover 弹出框

## 使用和示例
> `popover`是已挂载在Vue指令集上的一个自定义指令。使用时可以直接通过指令的方式来调用`v-popover="options" / v-popover.[trigger modifier]="options"`。

### 基础用法

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <button type="button" class="nv-btn" v-popover.hover="hoverConfig">hover触发</button>
      <button type="button" class="nv-btn" v-popover.click="{content: '我是通过click触发的'}">click触发</button>
      <button type="button" class="nv-btn" v-popover.focus="{content: '我是通过focus触发的', placement:'right'}">focus触发</button>
    </div>  
  </div>
</template>  
<script>
  export default {
    data () {
      return {
        hoverConfig: {
          content: '我是通过hover触发的'
        }
      }
    }
  }
</script>  
```
:::

### Balloon提示

:::vue-demo
```html
<template>
  <div class="doc-row">
    <div class="doc-row__body">
      <input type="text" id="ins4" class="nv-input" placeholder="获取焦点触发" v-popover.focus="{content:'支持1-32位中英文符号', customClass:'nv-popover--primary', placement: 'right'}"/>
      <hr class="nv-hr">
      <input type="text" id="ins5" class="nv-input" placeholder="获取焦点触发" v-popover.focus="{content:'支持1-32位中英文符号', customClass:'nv-popover--success', placement: 'right'}"/>
      <hr class="nv-hr">
      <input type="text" id="ins6" class="nv-input" placeholder="获取焦点触发" v-popover.focus="{content:'支持1-32位中英文符号', customClass:'nv-popover--error', placement: 'right'}"/>
    </div>  
  </div>
</template>  
<script>
  export default {}
</script>  
```
:::

## API

### Modifiers
| Modifier | Description |
| ----------- | ----------- | 
| click | 以`click`事件触发 | 
| focus | 以`focus`事件触发 |  
| hover | 以`hover`事件触发 | 
 

### Props 

同 `Native Options`
