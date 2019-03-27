<template>
  <label class="nv-select nv-color-picker__target target-select" :class="{'nv-disabled': disabled}" v-if="mode === 'select'">
    <span class="nv-color-lump" :style="lumpBackground"></span>
    <input class="nv-input" ref="input" v-model.lazy="inputVal" :readonly="readonly" :disabled="disabled">
  </label>
  <div class="nv-color-picker__target target-lump" :title="value" :class="{'nv-disabled': disabled}" :style="lumpColor" v-else>
    <button type="button" class="target-lump__outer">
      <span class="target-lump__inner" :style="lumpBackground"></span>
    </button>
    <slot></slot>  
  </div>    
</template>

<script>
  import {getEffectiveValue, ColorPicker} from '../../components/color-picker'
  export default {
    name: 'nv-color-picker',
    props: {
      lang: String,
      value: String,
      disabled: Boolean,
      lumps: Array,
      recentlyColors: Array,
      maxRecentlyCount: {
        type: Number,
        default: 6
      },
      palette: {
        type: Boolean,
        default: true
      },
      readonly: Boolean,
      mode: {
        type: String,
        default: 'select',
        validator(value) {
          return ['select', 'lump'].indexOf(value) > -1
        }
      },
      align: {
        type: String,
        default: 'left',
        validator(value) {
          return ['left', 'center', 'right'].indexOf(value) > -1
        }
      },
      customClass: String,
    },
    data () {
      return {
        instance: null,
      }
    },
    computed: {
      inputVal: {
        get () {
          return this.value
        },
        set (val) {
          let value = getEffectiveValue(val)
          if (value) {
            this.change(value)
            this.instance.setInitValue(value)
            this.$refs.input.value = value
          } else {
            this.$refs.input.value = this.value || ''
          }
        }
      },
      lumpBackground() {
        return 'background-color:' + (this.value || 'rgba(0,0,0,0)')
      },
      lumpColor() {
        return 'color:' + (this.value || 'rgba(0,0,0,0)')
      }
    },
    watch: {
      value (val, oldVal) {
        if (val !== oldVal) {
          this.instance.setValue(val)
        }
      },
      disabled (val) {
        val ? this.instance.disable() : this.instance.enable()
      }
    },
    methods: {
      change (val) {
        let oldValue = this.value
        this.$emit('input', val)
        this.$emit('change', val, oldValue)
      },
      addRecentlyColor (color) {
        this.instance.addRecentlyColor(color)
      }
    },
    mounted () {
      this.instance = new ColorPicker(this.$el, this.$props)
      this.instance
      .on('picker-click', () => {
        this.$refs.input && this.$refs.input.focus()
      })
      .on('change', (value, oldValue) => {
        this.change(value)
      })
      .on('paletteChange', (color, event) => {
        this.$emit('palette-change', color, event)
      })
      .on('open', () => this.$emit('open'))
      .on('close', () => this.$emit('close'))
    },
    beforeDestroy() {
      this.instance && this.instance.destroy()
      this.$nextTick(() => this.instance = null)
    }
  }
</script>