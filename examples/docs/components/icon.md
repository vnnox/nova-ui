# Icon 图标

### 全部图标

> 使用类`nv-icon-[name]` 即可调用相应图标，如`<i class="nv-icon-count"></i>`。 颜色使用`color`，大小使用`font-size`.

:::vue-demo
```html
<template>
  <div class="demo-icon-list">
    <div class="font-set">
      <span class="set-cell">颜色：</span>
      <div class="set-cell">
        <nv-color-picker v-model="color" mode="lump" :recently-colors="['#464c5b']" @palette-change="paletteChange" ref="colorPicker"></nv-color-picker>
      </div>  
      <span class="set-cell" style="margin-left:40px;">字号：</span>
      <div class="set-cell set-cell--slider">
        <nv-slider v-model="font" class="show-input" :min="12" :max="64" :step="1" :tip-formatter="formatter">
          <div class="nv-slider__input">
            <nv-input-number v-model="font" width="80" :min="12" :max="64" :step="1" :formatter="formatter"></nv-input-number>
          </div> 
        </nv-slider>
      </div>
    </div>
    <input type="text" ref="clipboard" style="position:absolute; left:-9999rem; z-index: -1;">
    <ul class="icon-rows">
      <li v-for="(icon,index) in icons" :key="index" @click="copy(icon)">
        <i :class="`nv-icon-${icon}`" :style="styles"></i>
        <span>{{icon}}</span>
      </li>
    </ul>  
  </div>
</template>   
<script>
  export default {
    data () {
      return {
        font: 32,
        color: '#464c5b',
        icons: 'care,doc-help,language,email,menu,list-add,menu-set,user,bell,upload,gear,export,move,copy,delete,edit,clear,add,search,zoom-out,zoom-in,mall,help,warning,info,count,info-square,cart,yuan,refresh,eye,filter,list,download,fullscreen,check,close,arrow-left,arrow-right,arrow-down,arrow-up,plus,minus,caret-top,caret-bottom,arrow-d-left,arrow-d-right,arrow-d-top,arrow-d-bottom,flow,circle-check,circle-close,circle-minus,time,circle-warning,circle-info,square-help,malfunction,play,pause,triangle-warning,circle-plus,circle-remove,video,image,file,audio,maximize,font-color,bold,italic,underline,shield,map,redo,undo,back,release,release-line,server-add,light,power,proofread-time,reboot,screen-power,play-circle,video-switch,volume,remote-log,player-log,vert-center,vert-bottom,vert-top,vert-fill,hori-center,hori-right,hori-left,hori-fill,clear,setting,fullscreen1,move-up,move-down,order,random,screen-close,screen-open,lock,user-fill,email-fill,succeed,phone-fill'.split(','),
      }
    },
    computed: {
      styles() {
        return `color:${this.color};font-size:${this.font}px;`
      }
    },
    methods: {
      formatter (val) {
        return val + 'px'
      },
      paletteChange (color) {
        // todo 存储到本地
        this.$refs.colorPicker.addRecentlyColor(color)
      },
      copy (value) {
        let icon = 'nv-icon-' + value
        let $el = this.$refs.clipboard
        $el.value = icon
        $el.select()
        let res = document.execCommand('copy')
        this.$message[res ? 'success' : 'error'](res ? `类名 ${icon} 已成功复制到剪贴板` : '复制到剪贴板失败')
      }
    },
  }
</script> 
```
:::