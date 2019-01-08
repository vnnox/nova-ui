<template>
  <li class="nv-dropmenu__item is-divider" v-if="divider"></li>
  <li class="nv-dropmenu__item" :class="className" @click.stop="onClick" v-else>
    <div class="item-inner"><slot></slot></div>
    <slot name="sub"></slot>
  </li>
</template>
<script>
  export default {
    name: 'nv-dropmenu-item',
    props: {
      divider: Boolean, 
      disabled: Boolean
    },
    computed: {
      className () {
        const classes = []
        if (this.$slots.sub) {
          classes.push('is-sub')
        }
        if (this.disabled) {
          classes.push('nv-disabled')
        }
        return classes
      },
      dropdown () {
        let parent = this.$parent
        while (parent) {
          let componentName = parent.$options.componentName || parent.$options.name 
          if (componentName !== 'nv-dropdown') {
            parent = parent.$parent
          } else {
            return parent
          }
        }
        return false
      },
    },
    methods: {
      onClick(e) {
        if (this.disabled) {
          return
        }
        this.$emit('click', e)
        this.dropdown && this.dropdown.close()
      }
    },
  }
</script>