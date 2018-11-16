# Slider 滑块

### 基础用法

:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">默认</h5>
  <p class="doc-row__describe"></p>
  <div class="doc-row__body">
    <input id="ins1" />
  </div>  
</div>
<hr class="nv-hr" />
<div class="doc-row">
  <h5 class="doc-row__title">自定义初始值/步进</h5>
  <div class="doc-row__body">
    <input id="ins2" step="5" value="50">
  </div>  
</div>
<hr class="nv-hr" />
<div class="doc-row">
  <h5 class="doc-row__title">隐藏tooltip</h5>
  <div class="doc-row__body">
    <input min="10" step="1" max="50" id="ins3" value="20">
  </div>  
</div>
<hr class="nv-hr" />
<div class="doc-row">
  <h5 class="doc-row__title">格式化tooltip</h5>
  <div class="doc-row__body">
    <input min="10" step=".5" max="50" id="ins4" value="25">
  </div>  
</div>
<script>
  var ins1 = new Nova.Slider(document.getElementById('ins1'))
  var ins2 = new Nova.Slider(document.getElementById('ins2'))
  var ins3 = new Nova.Slider(document.getElementById('ins3'), {
    tooltip: false
  })
  var ins4 = new Nova.Slider(document.getElementById('ins4'), {
    tipFormatter (value) {
      return value + '%'
    }
  })
  // 实例回收
  window.instances.push(ins1, ins2, ins3, ins4)
</script>
```
:::

### 禁用启用
:::demo
```html
<input id="ins5" value="20" disabled/>
<label class="nv-switch" role="checkbox" tabindex="0">
  <input type="checkbox" id="toggleDisabled">
  <i class="nv-switch__icon"></i>
  <span class="nv-switch__label">启用</span>
</label> 
<script>
  var ins5 = new Nova.Slider(document.getElementById('ins5'))
  var $toggleBtn = document.getElementById('toggleDisabled')
  $toggleBtn.onchange = function () {
    var checked = $toggleBtn.checked
    !checked ? ins5.disable() : ins5.enable()
  }
  // 实例回收
  window.instances.push(ins5)
</script>
```
:::


### 垂直方向
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">音量</h5>
  <p class="doc-row__describe"></p>
  <div class="doc-row__body">
    <div class="demo-slider-input" style="margin-top:20px;">
      <input step="1" value="50" min="0" max="100" id="ins7">
    </div>
  </div>  
</div>
<script>
  var ins7 = new Nova.Slider(document.getElementById('ins7'), {
    vertical: true
  })
  // 实例回收
  window.instances.push(ins7)
</script>
```
:::

