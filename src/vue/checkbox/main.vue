<template>
  <label class="nv-checkbox" role="checkbox" :tabindex="disabled ? -1 : 0">
    <input type="checkbox" :name="name" :value="label" v-model="val" :disabled="disabled" @change="change">
    <i class="nv-checkbox__icon"></i>
    <span class="nv-checkbox__label"><slot></slot></span>
  </label>
</template>
<script>
  export default {
    name: 'NvCheckbox',
    props: {
      value: {},
      label: {
        type: [String, Number, Boolean],
        required: true
      },
      name: String,
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