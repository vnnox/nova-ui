<template>
  <label role="checkbox" class="nv-check-item" :tabindex="disabled ? -1 : 0">
    <input type="checkbox" :name="name" :value="label" :disabled="disabled" v-model="value">
    <span class="nv-check__btn"><slot></slot></span>
  </label>
</template>
<script>
  export default {
    name: 'nv-checkbox-item',
    props: {
      label: {
        type: [String, Number, Boolean],
        required: true
      },
      disabled: Boolean
    },
    computed: {
      _checkboxGroup() {
        let parent = this.$parent
        while (parent) {
          let componentName = parent.$options.componentName || parent.$options.name 
          if (componentName !== 'nv-checkbox-group') {
            parent = parent.$parent
          } else {
            return parent
          }
        }
        return false
      },
      name () {
        return this._checkboxGroup.name
      },
      value: {
        get () {
          return this._checkboxGroup.value
        },
        set (value) {
          this._checkboxGroup.$emit('input', value)
          this._checkboxGroup.change(value)
        }
      }
    }
  }
</script>