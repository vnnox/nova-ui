<template>
  <div class="nv-dropdown" :class="{'nv-dropdown--show': visible}" @mouseenter="mouseenter" @mouseleave="mouseleave" :x-placement="align">
    <div class="nv-dropdown__toggle" @click="toggle">
      <slot name="toggle"></slot>
    </div>
    <div class="nv-dropdown__body" :style="{width: width}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'nv-dropdown',
    props: {
      value: Boolean,
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) > -1
        }
      },
      align: {
        type: String,
        default: 'bottom-start',
        validator(value) {
          return ['bottom-start', 'bottom', 'bottom-end'].indexOf(value) > -1
        }
      },
      width: String,
    },
    data() {
      return {
        visible: this.value,
        outClickHandle: null,
        hoverTimer: null
      }
    },
    watch: {
      value(val, old) {
        if (val !== old) {
          this.visible = val
        }
      }
    },
    methods: {
      emitChange () {
        this.$emit('input', this.visible)
      },
      toggle() {
        if (this.trigger === 'click') {
          this.visible = !this.visible
          this.emitChange()
        }
      },
      mouseenter () {
        if (this.trigger !== 'hover') {
          return
        }
        this.hoverTimer && clearTimeout(this.hoverTimer)
        this.open()
      },
      mouseleave () {
        if (this.trigger !== 'hover') {
          return
        }
        clearTimeout(this.hoverTimer)
        this.hoverTimer = setTimeout(() => {
          this.close()
        }, 100)
      },
      open () {
        this.visible = true
        this.emitChange()
      },
      close () {
        this.visible = false
        this.hoverTimer = null
        this.emitChange()
      }
    },
    mounted () {
      const self = this
      const $el = this.$el
      this.outClickHandle = function (event) {
        const $target = event.target
        if ($target !== $el && !$el.contains($target)) {
          self.close()
        }
      }
      document.addEventListener('click', this.outClickHandle)
    },
    beforeDestroy () {
      document.removeEventListener('click', this.outClickHandle)
    }
  }
</script>