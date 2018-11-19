<template>
  <div class="nv-slider--wrap" :class="{'nv-slider--vertical-wrap': vertical}">
    <div class="nv-slider__bar" ref="slider"></div>
    <slot />
  </div>
</template>
<script>
  import Slider from '../../components/slider'
  export default {
    name: 'nv-slider',
    props: {
      value: Number,
      min: Number,
      max: Number,
      step: Number,
      precision: Number,
      disabled: Boolean,
      tooltip: {
        type: Boolean,
        default: true
      },
      vertical: Boolean,
      height: String,
      customClass: String,
      tipFormatter: Function,
    },
    watch: {
      value(val, old) {
        if (val !== old && this.instance) {
          this.instance.setValue(val, true)
        }
      },
      disabled(val, old) {
        if (val !== old && this.instance) {
          val ? this.instance.disable() : this.instance.enable()
        }
      }
    },
    data () {
      return {
        instance: null
      }
    },
    mounted () {
      this.instance = new Slider(this.$refs.slider, this.$props)
      this.instance.on('change', value => {
        this.$emit('input', value)
        this.$emit('change', value)
      })
    },
    beforeDestroy() {
      this.instance && this.instance.destroy()
      this.$nextTick(() => this.instance = null)
    },
  }
</script>