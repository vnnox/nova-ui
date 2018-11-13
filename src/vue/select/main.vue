<template>
  <div class="nv-select--wrap">
    <slot />
  </div>  
</template>

<script>
  import Select from '../../components/select'
  export default {
    name: 'nv-select',
    props: {
      value: {},
      disabled: Boolean,
      valueKey: String,
      multiple: Boolean,
      multipleValueTpl: String,
      options: {
        type: Array,
        default() {
          return []
        }
      },
      placeholder: String,
      groupable: Boolean,
      clearable: Boolean,
      searchable: Boolean,
      filter: Function,
      loadByAsync: Boolean,
      searchByAsync: Boolean,
      name: String,
      inputSize: {
        type: String,
        default: 'default',
        validator(value) {
          return ['small', 'default', 'large'].indexOf(value) > -1
        }
      },
      selectClass: String,
      pickerClass: String,
      loadingText: String,
      noDataText: String,
      noMatchDataText: String,
      render: Function
    },
    data () {
      return {
        data: this.options,
        instance: null
      }
    },
    methods: {
      addOption (option) {
        this.data.push(option)
        this.instance && this.instance.setOptions(this.data)
      }
    },

    mounted () {
      let props = this.$props
      props.options = this.data
      this.instance = new Select(this.$el, props)
      this.instance
      .on('open', () => this.$emit('open'))
      .on('close', () => this.$emit('close'))
      .on('focus', event => this.$emit('focus', event))
      .on('blur', event => this.$emit('blur', event))
      .on('change', (value, options) => this.$emit('change', value, options))
    },

    beforeDestroy() {
      this.instance && this.instance.destroy()
      this.$nextTick(() => this.instance = null)
    },

    watch: {
      disabled() {
        this.disabled ? this.instance.disable() : this.instance.enable()
      },
      value () {
        this.instance.setValue(this.value)
      }
    }
  }
</script>