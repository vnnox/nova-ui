<template>
  <label class="nv-select nv-color-picker--wrap" :class="{'nv-disabled': disable}">
    <span class="nv-color-lump" :style="lumpBackground"></span>
    <input class="nv-input" ref="input" v-model.lazy="inputVal" :disabled="disabled">
  </label>  
</template>

<script>
  import {getEffectiveValue, ColorPicker} from '../../components/color-picker'
  export default {
    name: 'nv-color-picker',
    props: {
      value: String,
      disabled: Boolean,
      lumps: Array,
      clearable: Boolean,
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
      }
    },
    watch: {
      value (val, oldVal) {
        if (val !== oldVal) {
          this.instance.setInitValue(val)
        }
      },
      disabled (val) {
        val ? this.instance.disable() : this.instance.enable()
      }
    },
    methods: {
      change (val) {
        this.$emit('input', val)
        this.$emit('change', val)
      }
    },
    mounted () {
      this.instance = new ColorPicker(this.$el, this.$props)
      this.instance
      .on('picker-click', () => {
        this.$refs.input.focus()
      })
      .on('done', (value, oldValue) => {
        this.value = value
      })
    },
    beforeDestroy() {
      this.instance && this.instance.destroy()
      this.$nextTick(() => this.instance = null)
    }
  }
</script>