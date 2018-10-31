<template>
  <label class="nv-radio" role="radio" :tabindex="disabled ? -1 : 0">
    <input type="radio" :name="name" :value="label" v-model="val" @change="change" :disabled="disabled" />
    <i class="nv-radio__icon"></i>
    <span class="nv-radio__label"><slot></slot></span>
  </label>
</template>
<script>
  export default {
    name: 'NvRadio',
    props: {
      value: [String, Number, Boolean],
      label: {
        type: [String, Number, Boolean],
        required: true
      },
      name: {
        type: String,
        default: '',
        required: true
      },
      disabled: Boolean
    },
    data() {
      return {
        val: this.value
      }
    },
    methods: {
      change() {
        this.$emit('input', this.val)
        this.$emit('change', this.val)
      }
    },
    watch: {
      value() {
        this.val = this.value
      }
    }
  }
</script>