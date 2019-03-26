<template>
  <div class="nv-input-number--wrap"></div>
</template>
<script>
  import InputNumber from '../../components/input-number'
  export default {
    name: 'nv-input-number',
    props: {
      value: [String, Number],
      min: {
        type: Number,
        default: -Infinity
      },
      max: {
        type: Number,
        default: Infinity
      },
      step: {
        type: Number,
        default: 1
      },
      precision: Number,
      disabled: Boolean,
      editable: {
        type: Boolean,
        default: true
      },
      placeholder: String,
      name: String,
      width: [Number, String],
      size: {
        type: String,
        default: 'default',
        validator(value) {
          return ['small', 'default', 'large'].indexOf(value) > -1
        }
      },
      customClass: String,
      formatter: Function
    },
    data() {
      return {
        instance: null
      }
    },
    mounted() {
      this.instance = new InputNumber(this.$el, this.$props)
      this.instance.on('change', (newVal, oldVal) => {
        if (newVal !== this.value) {
          this.$emit('input', newVal)
          this.$emit('change', newVal, oldVal)
        }
      })
    },

    watch: {
      value(val, old) {
        if (val !== old && this.instance) {
          this.instance.setValue(val)
        }
      },
      disabled(val, old) {
        if (val !== old && this.instance) {
          val ? this.instance.disable() : this.instance.enable()
        }
      },
      min (val) {
        this.instance && this.instance.setOptions({
          min: val
        })
      },
      max (val) {
        this.instance && this.instance.setOptions({
          max: val
        })
      }
    },

    beforeDestroy() {
      this.instance && this.instance.destroy()
      this.$nextTick(() => this.instance = null)
    }
  }
</script>