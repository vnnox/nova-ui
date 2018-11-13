<template>
  <span hidden><slot /></span>
</template>

<script>
  import {isFunction} from '../../utils/utils'
  export default {
    name: 'nv-option',
    props: {
      value: {},
      label: {},
      disabled: Boolean
    },
    mounted () {
      if (this.$parent && isFunction(this.$parent.addOption)) {
        this.$parent.addOption({
          value: this.value,
          label: (this.label || this.$el.innerHTML || this.value),
          disabled: this.disabled 
        })
      }
      this.$el.parentNode.removeChild(this.$el)
    }
  }
</script>