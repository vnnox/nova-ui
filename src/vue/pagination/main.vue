<template>
  <div class="nv-pagination--wrap"></div>
</template>

<script>
  import Pagination from '../../components/pagination'
  export default {
    name: 'nv-pagination',
    props: {
      lang: String,
      total: Number,
      limit:  Number,
      index: {
        type: Number,
        default: 1
      },
      visible: Number,
      ellipsis: {
        type: Boolean,
        default: true
      },
      layout: String,
      prevText: String,
      nextText: String,
      sizes: Array,
      customClass: String
    },
    data () {
      return {
        instance: null
      }
    },
    watch: {
      total (val, oldVal) {
        if (val !== oldVal) {
          this.instance.setTotal(val)
        }
      },
      index (val, oldVal) {
        if (val !== oldVal) {
          this.instance.setIndex(val, false)
        }
      },
      limit (val, oldVal) {
        if (val !== oldVal) {
          this.instance.setLimit(val, false)
        }
      }
    },
    mounted () {
      this.instance = new Pagination(this.$el, this.$props)
      this.instance.on('change', (index, limit, pages) => this.$emit('change', index, limit, pages))
    },
    beforeDestroy() {
      this.instance && this.instance.destroy()
      this.$nextTick(() => this.instance = null)
    }
  }
</script>