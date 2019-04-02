<template>
  <transition name="fade">
    <span class="nv-tag" :class="className" v-if="visible">
      <span class="nv-tag__label" :title="label">
        <slot>{{label}}</slot>
      </span>
      <a class="nv-tag__close nv-icon-close" v-if="removeable" @click.stop="remove"></a>
    </span>
  </transition>
</template>

<script>
  export default {
    name: 'nv-tag',
    props: {
      removeable: Boolean,
      label: String,
      size: {
        type: String,
        default: 'default',
        validator(value) {
          return ['small', 'default', 'tiny'].indexOf(value) > -1
        }
      },
      type: {
        type: String,
        default: 'default',
        validator(value) {
          return ['default', 'error'].indexOf(value) > -1
        }
      }
    },
    computed: {
      className() {
        let className = []
        if (this.size !== 'default') {
          className.push(`nv-tag--${this.size}`)
        }
        if (this.type !== 'default') {
          className.push(`nv-tag--${this.type}`)
        }
        return className
      }
    },
    data() {
      return {
        visible: true
      }
    },
    methods: {
      remove() {
        this.visible = false
        this.$emit('remove', this.label)
      }
    }
  }
</script>