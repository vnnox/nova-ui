<template>
  <li class="nv-dropmenu__item is-divider" v-if="divider"></li>
  <li class="nv-dropmenu__item" :class="className" @click="onClick" v-else>
    <div class="item-inner"><slot></slot></div>
    <slot name="sub"></slot>
  </li>
</template>
<script>
  export default {
    name: 'nv-dropmenu-item',
    props: {
      divider: Boolean, 
    },
    computed: {
      className () {
        if (this.$slots.sub) {
          return 'is-sub'
        }
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
      onClick() {
        this.dropdown && this.dropdown.close()
      }
    },
  }
</script>