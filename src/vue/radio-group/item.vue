<template>
  <label role="radio" class="nv-check-item" :tabindex="disabled ? -1 : 0">
    <input type="radio" :name="name" :value="label" :disabled="disabled" v-model="value">
    <span class="nv-check__btn"><slot></slot></span>
  </label>
</template>
<script>
  export default {
    name: 'nv-radio-item',
    props: {
      label: {
        type: [String, Number, Boolean],
        required: true
      },
      disabled: Boolean
    },
    computed: {
      _radioGroup() {
        let parent = this.$parent
        while (parent) {
          let componentName = parent.$options.componentName || parent.$options.name 
          if (componentName !== 'nv-radio-group') {
            parent = parent.$parent
          } else {
            return parent
          }
        }
        return false
      },
      name () {
        return this._radioGroup.name
      },
      value: {
        get () {
          return this._radioGroup.value
        },
        set (value) {
          this._radioGroup.$emit('input', value)
          this._radioGroup.change(value)
        }
      }
    }
  }
</script>