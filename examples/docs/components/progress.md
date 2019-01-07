# Progress 进度

## 使用和示例

### 基础用法

:::demo
```html
<div class="doc-row">
  <p class="doc-row__describe">线形进度条</p>
  <div class="doc-row__body">
    <div id="ins1" style="max-width:760px;"></div>
    <hr class="nv-hr">
    <div id="ins2" style="max-width:760px;"></div>
    <hr class="nv-hr">
    <div id="ins3" style="max-width:760px;"></div>
  </div>  
</div>

<script>
  var ins1 = new Nova.Progress(document.getElementById('ins1'),{
    value: 40
  })
  var ins2 = new Nova.Progress(document.getElementById('ins2'),{
    value: 60,
    status: 'success',
  })
  var ins3 = new Nova.Progress(document.getElementById('ins3'),{
    value: 80,
    status: 'fail',
  })
  window.instances.push(ins1, ins2, ins3)
</script>  
```
:::


### 文本在进度条上

:::demo
```html
<div class="doc-row">
  <p class="doc-row__describe">可以将文本显示在里面，此时应该尽量将<code>thickness</code>调大点，以便可以放置文本</p>
  <div class="doc-row__body">
    <div id="ins4" style="max-width:760px;"></div>
    <hr class="nv-hr">
    <div id="ins5" style="max-width:760px;"></div>
     <hr class="nv-hr">
    <div id="ins6" style="max-width:760px;"></div>
  </div>  
</div>

<script>
  var ins1 = new Nova.Progress(document.getElementById('ins4'),{
    value: 40,
    labelInside: true,
    thickness: 16,
  })
  var ins2 = new Nova.Progress(document.getElementById('ins5'),{
    value: 60,
    status: 'success',
    labelInside: true,
    thickness: 16,
  })
  var ins3 = new Nova.Progress(document.getElementById('ins6'),{
    value: 80,
    status: 'fail',
    labelInside: true,
    thickness: 16,
  })

  window.instances.push(ins1, ins2, ins3)
</script>  
```
:::


## API

### Options
| Attribute   | Description | Type |  Default Values |
| ----------- | ----------- | ----------- | ----------- |
| value | 绑定的进度值 | number`< 0- 100 >` | 0 |
| thickness | 线条厚度,单位像素 | number | 8 |
| status | 状态，不同状态显示不同颜色 | string<`running | success | fail`> | `running` |
| showLabel | 是否显示文本... | boolean | true |
| labelInside | 是否在进度条内显示文本 | boolean | false |
| customClass | 自定义样式名称，多样式以逗号`,`分隔 | string | -- |


### Methods
| Method  | Description | Parameters |
| ----------- | ----------- | ----------- |
| setValue | 设置进度值 | (value:number) |
| setStatus | 设置状态值 | (status:string<`running | success | fail`>) |
| destroy | 销毁实例`销毁后，实例将完全不可用` | -- |
