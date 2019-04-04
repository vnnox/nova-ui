<template>
  <div class="nv-date-picker--wrap nv-select"
    :class="{'is-multiple': multiple, 'show-clean': clearable && !disabled && hasValue, 'nv-disabled': disabled}"
    role="combobox">
    <input type="text" class="nv-input" :disabled="disabled" :readonly="readonly" :placeholder="placeholder"
      :name="name" ref="input" v-model.lazy="inputValue" v-if="!multiple" />
    <div class="multiple-value" :class="{'is-tag':tag}" v-else ref="input">
      <div class="nv-color-placeholder" v-if="!multipleValue.length">{{placeholder}}</div>
      <div class="multiple-value__contents" v-else>
        <template v-if="tag">
          <span class="nv-tag nv-tag--tiny" v-for="(item, index) in multipleValue" :key="item">
            <span class="nv-tag__label" :title="item">{{item}}</span>
            <a class="nv-tag__close nv-icon-close" v-if="removeable" @click.stop="remove(index)"></a>
          </span>
        </template>
        <template v-else>
          <span class="multiple-value__item" v-for="item in multipleValue"
            :key="item">{{item}}{{multipleSeparator}}</span>
        </template>
      </div>
    </div>
    <a class="nv-select__clean" v-if="clearable" @click.stop="clear">
      <i class="nv-icon-close"></i>
    </a>
  </div>
</template>
<script>
  import DatePicker from '../../components/date-picker'
  import {
    parseDate,
    formatDate
  } from '../../components/date-picker/utils'
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
      confirm: Boolean,
      multiple: Boolean,
      maxMultipleCount: Number,
      // 多选分隔符
      multipleSeparator: {
        type: String,
        default: '; '
      },
      // tag 模式
      tag: Boolean,
      // tag模式下单个项是否可移除
      removeable: Boolean
    },
    data() {
      return {
        instance: null,
        // 多选值
        multipleValue: []
      }
    },
    computed: {
      inputValue: {
        set(val) {
          if (this.multiple) {
            return
          }
          let value = parseDate(val, this.format)
          if (value) {
            this.instance.setValue(value, true)
          }
          this.$refs.input.value = this.instance.getValue(true)
          this.change(this.instance.getValue(true), this.instance.getValue())
        },
        get() {
          if (this.multiple) {
            return
          }
          let value = parseDate(this.value, this.format)
          if (value) {
            return formatDate(value, this.format)
          }
          return ''
        }
      },
      // 是否有值
      hasValue() {
        if (this.multiple) {
          return this.multipleValue.length
        }
        return this.value
      }
    },
    methods: {

      // change
      change(formatValue, value) {
        let isTrueChange = false
        if (this.multiple) {
          if ((this.multipleValue || []).join(this.multipleSeparator) != formatValue) {
            isTrueChange = true
          }
        }
        else {
          if (formatValue !== this.value) {
            isTrueChange = true
          }
        }
        if (isTrueChange) {
          this.$emit('input', formatValue)
          this.$emit('done', formatValue, value)
        }
      },

      // 清空
      clear() {
        this.instance.setValue(null, true)
      },

      // 设置多选值
      setMultipleValue() {
        if (!this.multiple) {
          return
        }
        let value = this.value
        if (value && !Array.isArray(value)) {
          if (value instanceof Date) {
            value = [value]
          } else if (typeof value === 'string') {
            value = value.split(this.multipleSeparator)
          } else {
            value = ''
          }
        }
        let vals = []
        if (Array.isArray(value)) {
          value.forEach(val => {
            let date = formatDate(val, this.format)
            if (date)
              vals.push(date)
          })
        }
        this.multipleValue = vals
        this.instance && this.instance.setValue([...this.multipleValue], true)
      },

      // 移除值
      remove(index) {
        if (!this.multiple || !this.removeable) {
          return
        }
        this.multipleValue.splice(index, 1)
        this.instance && this.instance.setValue([...this.multipleValue], true)
      }
    },
    watch: {
      disabled(val) {
        if (this.instance) {
          val ? this.instance.disable() : this.instance.enable()
        }
      },
      value: {
        handler(val, old) {
          if (this.multiple) {
            this.setMultipleValue()
          }
          else {
            if (val !== old && this.instance) {
              this.instance.setValue(val, true)
            }
          }
        },
        deep: true
      },
    },
    mounted() {
      if (this.multiple) {
        this.setMultipleValue()
      }
      this.instance = new DatePicker(this.$el, this.$props)
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