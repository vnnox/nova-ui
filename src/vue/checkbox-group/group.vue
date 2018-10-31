<template>
  <div class="nv-check-group" :class="className" role="checkboxgroup"><slot></slot></div>  
</template>
<script>
  export default {
    name: 'NvCheckboxGroup',
    props: {
      value: {},
      name: String,
      size: {
        type: String,
        default: 'default',
        validator(value) {
          return ['small', 'default'].indexOf(value) > -1
        }
      },
      type: {
        type: String,
        default: 'default',
        validator(value) {
          return ['primary', 'default'].indexOf(value) > -1
        }
      }
    },
    computed : {
      className () {
        let className = []
        if (this.size !== 'default') {
          className.push(`nv-check--${this.size}`)
        }
        if (this.type !== 'default') {
          className.push(`nv-check--${this.type}`)
        }
        return className
      }
    },
    watch: {
      value () {
        // todo
      }
    }
  }
</script>