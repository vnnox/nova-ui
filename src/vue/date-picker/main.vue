<template>
  <div class="nv-date-picker--wrap nv-select" :class="{'show-clean': inputValue}" role="combobox">
    <input type="text" class="nv-input" :disabled="disabled" :readonly="readonly" :placeholder="placeholder" :name="name" ref="input" v-model.lazy="inputValue"/>
    <a class="nv-select__clean" v-if="clearable" @click.stop="clear">
      <i class="nv-icon-close"></i>
    </a>  
  </div>  
</template>
<script>
  import DatePicker from '../../components/date-picker'
  import {parseDate, formatDate} from '../../components/date-picker/utils'
  export default {
    name: 'nv-date-picker',
    props: {
      lang: String,
      value: {},
      placeholder: String,
      readonly: Boolean,
      clearable: Boolean,
      name: String,
      mode: {
        type: String,
        default: 'date',
        validator(value) {
          return ['date', 'year', 'month'].indexOf(value) > -1
        }
      },
      format: {
        type: String,
        default: 'YYYY-MM-DD'
      },
      weekStart: {
        type: Number,
        default: 0
      },
      disabledDate: Function,
      min: {},
      max: {},
      disabled: Boolean,
      customClass: String,
      align: {
        type: String,
        default: 'left',
        validator(value) {
          return ['left', 'center', 'right'].indexOf(value) > -1
        }
      },
      today: Boolean,
      confirm: Boolean
    },
    data () {
      return {
        instance: null
      }
    },
    computed: {
      inputValue :{
        set (val) {
          let value = parseDate(val, this.format)
          if (value) {
            this.instance.setValue(value, true)
          }
          this.$refs.input.value = this.instance.getValue(true)
          this.change(this.instance.getValue())
        },
        get () {
          let value = parseDate(this.value, this.format)
          if (value) {
            return formatDate(value, this.format)
          }
          return ''
        }
      }
    },
    methods: {
      change (val) {
        let oldValue = this.value
        this.$emit('input', val)
        this.$emit('done', val, oldValue)
      },
      clear () {
        this.instance.setValue(null, true)
      }
    },
    mounted () {
      this.instance = new DatePicker(this.$el, this.$props)
      this.instance
      .on('picker-click', () => {
        this.$refs.input && this.$refs.input.focus()
      })
      .on('done', (formatValue, value) => {
        this.change(value)
      })
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