# Select 选择器

### 基础用法
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">默认</h5>
  <p class="doc-row__describe"></p>
  <div class="doc-row__body" id="ins1"></div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">可清除</h5>
  <p class="doc-row__describe">设置参数<code>clearable:true</code>可展示清空已选择按钮</p>
  <div class="doc-row__body" id="ins2"></div>
</div>
<script>
 var options = [{
    value: '0086',
    label: '中国'
  }, {
    value: '001',
    label: '加拿大'
  }, {
    value: '0049',
    label: '德国'
  }, {
    value: '00853',
    label: '澳门'
  }, {
    value: '0052',
    label: '墨西哥'
  }]
  var ins1 = new Nova.Select(document.getElementById('ins1'), {
    value: '0049',
    options: options,
  })
  var ins2 = new Nova.Select(document.getElementById('ins2'), {
    options: options,
    clearable: true
  })
  window.instances.push(ins1, ins2)
</script>  
```
:::

### 禁用
:::demo
```html
<div class="doc-row">
  <h5 class="doc-row__title">全局禁用</h5>
  <p class="doc-row__describe">设置参数<code>disabled:true</code>可禁用Select</p>
  <div class="doc-row__body">
    <div style="display:inline-block;" id="ins3"></div>
    <label class="nv-switch" role="checkbox" tabindex="0" style="margin-left:20px;">
      <input type="checkbox" id="toggelInsState">
      <i class="nv-switch__icon"></i>
      <span class="nv-switch__label">启用</span>
    </label>
  </div>
</div>
<div class="doc-row">
  <h5 class="doc-row__title">局部禁用</h5>
  <p class="doc-row__describe">设置选项的<code>disabled</code>属性可针对某(几)个选项禁用</p>
  <div class="doc-row__body" id="ins4"></div>
</div>
<script>
 var options = [{
    value: '0086',
    label: '中国'
  }, {
    value: '001',
    label: '加拿大',
    disabled: true
  }, {
    value: '0049',
    label: '德国'
  }, {
    value: '00853',
    label: '澳门'
  }, {
    value: '0052',
    label: '墨西哥'
  }]
  var ins3 = new Nova.Select(document.getElementById('ins3'), {
    value: '0049',
    options: options,
    disabled: true
  })
  document.getElementById('toggelInsState').onchange = function() {
    this.checked ? ins3.enable() : ins3.disable()
  }
  var ins4 = new Nova.Select(document.getElementById('ins4'), {
    options: options,
    clearable: true
  })
  window.instances.push(ins3, ins4)
</script>  
```
:::

### 分组
:::demo
```html
<input hidden id="ins5">
<script>
  var options = [
    {
      label: '湖南省',
      options: [
        {
          label: '长沙市',
          value: '430100'
        },
        {
          label: '株洲市',
          value: '430200'
        },
        {
          label: '张家界市',
          value: '430800'
        },
        {
          label: '湘西自治州',
          value: '433100'
        }
      ]
    },
    {
      label: '四川省',
      options: [
        {
          label: '成都市',
          value: '510100'
        },
        {
          label: '自贡市',
          value: '510300'
        },
        {
          label: '攀枝花市',
          value: '510400'
        },{
          label: '泸州市',
          value: '510500'
        },{
          label: '绵阳市',
          value: '510700'
        }
      ]
    },
    {
      label: '陕西省',
      options: [
        {
          label: '西安市',
          value: '610100'
        },
        {
          label: '铜川市',
          value: '610200'
        },
        {
          label: '宝鸡市',
          value: '610300'
        },
        {
          label: '咸阳市',
          value: '610400'
        },
        {
          label: '渭南市',
          value: '610500'
        },
        {
          label: '延安市',
          value: '610600'
        }
      ]
    },
    {
      label: '甘肃省',
      options: [
        {
          label: '兰州市',
          value: '620100'
        },
        {
          label: '嘉峪关市',
          value: '620200'
        },
        {
          label: '金昌市',
          value: '620300'
        },
        {
          label: '白银市',
          value: '620400'
        },
        {
          label: '天水市',
          value: '620500'
        },
        {
          label: '陇南市',
          value: '621200'
        },
        {
          label: '临夏自治州',
          value: '622900'
        }
      ]
    }
  ]
  var ins5 = new Nova.Select(document.getElementById('ins5'), {
    options: options,
    groupable: true,
  })
  window.instances.push(ins5)
</script>  
```
:::

### 多选
:::demo
```html
<input hidden id="ins6">
<span id="multiple-selected-result" style="margin-left:10px;"></span>
<script>
var options = [{
    value: '0086',
    label: '中国'
  }, {
    value: '001',
    label: '加拿大'
  }, {
    value: '0049',
    label: '德国'
  }, {
    value: '00853',
    label: '澳门'
  }, {
    value: '0052',
    label: '墨西哥'
  }]

  var ins6 = new Nova.Select(document.getElementById('ins6'), {
    options: options,
    multiple: true
  })
  var $result = document.getElementById('multiple-selected-result')
  ins6.on('change', function(value, options) {
    var html = 'value:' + JSON.stringify(value) + '; items: ['
    options && options.forEach(function(option) {
      html += ((option.label || option.value) + ',')
    })
    html = html.replace(/,$/, '')
    html += ']'
    $result.innerHTML = html
  })

  // 回收实例
  window.instances.push(ins6)
</script>
```
:::