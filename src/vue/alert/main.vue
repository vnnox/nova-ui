<template>
  <transition name="fade">
    <div role="alert" class="nv-alert" :class="className" v-if="visible">
      <div class="nv-alert__inner">
        <span class="nv-alert__icon" v-if="showIcon">
          <i :class="icon"></i>
        </span>
        <span class="nv-alert__content"><slot>{{content}}</slot></span>
        <button type="button" class="nv-alert__close" data-dismiss="alert" aria-label="Close" v-if="closable" @click="close">
          <span v-if="closeLabel">{{closeLabel}}</span>
          <i class="nv-icon-close" v-else></i>
        </button>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'nv-alert',
    props: {
      type: {
        type: String,
        default: 'info',
        validator(value) {
          return ['info', 'success', 'error', 'warning', 'default'].indexOf(value) > -1
        }
      },
      content: String,
      closable: {
        type: Boolean,
        default: true
      },
      customIcon: String,
      showIcon: {
        type: Boolean,
        default: true
      },
      closeLabel: String
    },
    data () {
      return {
        visible: true
      }
    },
    computed: {
      className () {
        let className = this.type !== 'default' ? [`nv-alert--${this.type}`] : []
        if (this.closable) {
          className.push('has-close')
        }
        return className
      },
      icon() {
        if (!this.showIcon) {
          return ''
        }
        if (this.customIcon) {
          return this.customIcon
        }
        let icon
        switch (this.type) {
          case 'success':
            icon = 'nv-icon-circle-check'
            break
          case 'error':
            icon = 'nv-icon-circle-close'
            break
          case 'warning':
            icon = 'nv-icon-circle-warning'
            break
          case 'info':
          default:
            icon = 'nv-icon-circle-info'
            break
        }
        return icon
      }
    },
    methods: {
      close () {
        this.visible = false
        this.$emit('close')
      }
    }
  }
</script>