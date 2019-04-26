<template>
  <div class="nv-select--wrap">
    <slot />
  </div>
</template>

<script>
  import Select from '../../components/select'
  import { objectClone } from '../../utils/utils'
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
      render: Function,
      align: String
    },

    data() {
      return {
        data: objectClone(this.options),
        instance: null
      }
    },

    methods: {
      addOption(option) {
        if (this.data.find(item => item.value === option.value)) {
          return
        }
        this.data.push(objectClone(option))
        this.instance && this.instance.setOptions(this.data)
      }
    },

    mounted() {
      const props = objectClone(this.$props)
      props.options = this.data
      props.filter = this.filter
      props.render = this.render
      this.instance = new Select(this.$el, props)
      this.instance
        .on('open', () => this.$emit('open'))
        .on('close', () => this.$emit('close'))
        .on('focus', event => this.$emit('focus', event))
        .on('blur', event => this.$emit('blur', event))
        .on('change', (value, options) => {
          this.$emit('input', value)
          this.$emit('change', value, options)
        })
    },

    beforeDestroy() {
      this.instance && this.instance.destroy()
      this.$nextTick(() => this.instance = null)
    },

    watch: {
      disabled(val) {
        val ? this.instance.disable() : this.instance.enable()
      },
      value() {
        this.instance.setValue(this.value)
      },
      options: {
        handler(val, old) {
          if (this.instance) {
            this.data = objectClone(val)
            this.instance.setOptions(this.data)
          }
        },
        deep: true
      },
    }
  }
</script>