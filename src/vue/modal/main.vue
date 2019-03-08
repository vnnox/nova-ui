<template>
  <div class="nv-modal--wrap" hidden>
    <div data-slot="content" v-if="$slots.default" ref="content"><slot><!-- 内容插槽 --></slot></div>
    <div data-slot="foot" ref="foot" v-if="$slots.foot"><slot name="foot"><!-- 额外脚注插槽 --></slot></div>
    <div data-slot="btns" ref="btns" v-if="$slots.btns"><slot name="btns"><!-- 按钮插槽 --></slot></div>
  </div>
</template>
<script>
  import Modal from '../../components/modal'
  export default {
    name: 'nv-modal',
    props: {
      value: Boolean,
      title: String,
      closeBtn: {
        type: Boolean,
        default: true
      },
      backdrop: {
        type: Boolean,
        default: true
      },
      backdropBackground: String,
      backdropClose: {
        type: Boolean,
        default: true
      },
      escClose: {
        type: Boolean,
        default: true
      },
      width: [Number, String],
      top: [Number, String],
      customClass: String,
      scrollLock: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        instance: null,
        visible: this.value
      }
    },
    mounted() {
      const props = this.$props
      props.visible = this.visible
      props.content = this.$refs['content'] || ''
      props.footSlot = this.$refs['foot'] || null
      props.btns = this.$refs['btns'] || null
      this.$el.parentNode.removeChild(this.$el)
      this.instance = new Modal(props)
      this.instance
      .on('open', $el => {
        this.visible = true
        this.$emit('open', $el)
        this.$emit('input', true)
      })
      .on('close', (type, $el) => {
        this.visible = false
        this.$emit('close', type, $el)
        this.$emit('input', false)
      })

      // this.baywatch(['title', 'closeBtn', 'backdrop', 'backdropBackground', 'backdropClose', 'escClose', 'width', 'top', 'scrollLock'], this.updateOptions.bind(this))
    },
    watch: {
      value(val, oldVal) {
        if (val !== oldVal) {
          this.visible = val
          if (val && this.instance) {
            this.instance.open()
          } else {
            this.instance.close()
          }
        }
      },

      title (val) {
        this.updateOptions({title: val})
      },

      width (val) {
        this.updateOptions({width: val})
      },

      top (val) {
        this.updateOptions({top: val})
      },
    },
    methods: {
      open() {
        this.instance && this.instance.open()
      },
      close(type) {
        this.instance && this.instance.close(type)
      },
      updateOptions (options) {
        this.instance && this.instance.updateOptions(options)
      },
      
      // baywatch (props, watcher) {
      //   const iterator = function(prop) {
      //     this.$watch(prop, watcher)
      //   }
      //   props.forEach(iterator, this)
      // },
    },
    beforeDestroy() {
      try {
        this.instance && this.instance.destroy()
        this.$nextTick(() => this.instance = null)
      } catch (error) {
        
      }
    }
  }
</script>