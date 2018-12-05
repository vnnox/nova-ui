<template>
  <div class="nv-date-picker--wrap nv-select" :class="{'show-clean': value}" role="combobox">
    <input type="text" class="nv-input" :disabled="disabled" :readonly="readonly" :placeholder="placeholder" :name="name"
      ref="input"/>
    <a class="nv-select__clean" v-if="clearable" @click.stop="clear">
      <i class="nv-icon-close"></i>
    </a>
  </div>
</template>
<script>
  import TimePicker from '../../components/time-picker'
  import { parseDate, formatDate } from '../../components/date-picker/utils'
  export default {
    name: 'nv-time-picker',
    props: {
      lang: String,
      value: {},
      defaultValue: {},
      placeholder: String,
      readonly: Boolean,
      clearable: Boolean,
      name: String,
      format: {
        type: String,
        default: 'HH:mm:ss'
      },
      minTime: {},
      maxTime: {},
      disabled: Boolean,
      customClass: String,
      align: {
        type: String,
        default: 'left',
        validator(value) {
          return ['left', 'center', 'right'].indexOf(value) > -1
        }
      },
      cancel: Boolean,
      confirm: Boolean
    },
    data() {
      return {
        instance: null
      }
    },
    computed: {
    },
    methods: {
      change(formatValue, value) {
        this.$emit('input', formatValue)
        this.$emit('done', formatValue, value)
      },
      clear() {
        this.instance.setValue(null, true)
      }
    },
    mounted() {
      this.instance = new TimePicker(this.$refs.input, this.$props)
      this.instance
        .on('picker-click', () => {
          this.$refs.input && this.$refs.input.focus()
        })
        .on('done', (formatValue, value) => this.change(formatValue, value))
        .on('open', () => this.$emit('open'))
        .on('close', () => this.$emit('close'))
        .on('change', (formatValue, value) => this.$emit('change', formatValue, value))
    },
    beforeDestroy() {
      this.instance && this.instance.destroy()
      this.$nextTick(() => this.instance = null)
    }
  }
</script>