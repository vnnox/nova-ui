<template>
  <div class="nv-progress--wrap"></div>
</template>

<script>
  import Progress from '../../components/progress'
  export default {
    name: 'nv-progress',
    props: {
      value: Number,
      type: {
        type: String,
        default: 'line'
      },
      thickness: {
        type: Number,
        default: 8,
      },
      status: {
        type: String,
        default: 'running',
        validator(value) {
          return ['running', 'success', 'fail'].indexOf(value) > -1
        }
      },
      showLabel: {
        type: Boolean,
        default: true,
      },
      labelInside: {
        type: Boolean,
        default: false,
      },
      customClass: String
    },
    data() {
      return {
        instance: null
      }
    },
    methods: {
      setValue() {
        this.instance && this.instance.setValue(this.value)
      },
      setStatus () {
        this.instance && this.instance.setStatus(this.status)
      }
    },
    mounted() {
      this.instance = new Progress(this.$el, this.$props)
    },
    watch: {
      value() {
        this.setValue()
      },
      status() {
        this.setStatus()
      },
    },
    beforeDestroy() {
      this.instance && this.instance.destroy()
      this.$nextTick(() => this.instance = null)
    }
  }
</script>