<template>
  <label class="nv-checkbox" :class="{'nv-checkbox--indeterminate': indeterminate && !val}" role="checkbox" :tabindex="disabled ? -1 : 0">
    <input type="checkbox" :name="name" :value="label" v-model="val" :disabled="disabled" @change="change">
    <span class="nv-checkbox__label" v-if="$slots.before"><slot name="before"></slot></span>
    <i class="nv-checkbox__icon"></i>
    <span class="nv-checkbox__label" v-if="$slots.default"><slot></slot></span>
  </label>
</template>
<script>
  export default {
    name: 'nv-checkbox',
    props: {
      value: {},
      label: {
        type: [String, Number, Boolean],
        required: true
      },
      name: String,
      disabled: Boolean,
      indeterminate: Boolean
    },
    data() {
      return {
        val: this.value
      }
    },
    methods: {
      change(e) {
        this.$emit('input', this.val)
        this.$emit('change', this.val, e)
      }
    },
    watch: {
      value() {
        this.val = this.value
      }
    }
  }
</script>