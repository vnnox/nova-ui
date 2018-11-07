<template>
  <label class="nv-switch" role="checkbox" :tabindex="disabled ? -1 : 0">
    <input type="checkbox" :name="name" :value="label" v-model="val" :disabled="disabled">
    <span class="nv-switch__label" v-if="$slots.before">
      <slot name="before"></slot>
    </span>
    <i class="nv-switch__icon"></i>
    <span class="nv-switch__label" v-if="$slots.default">
      <slot></slot>
    </span>
  </label>
</template>
<script>
  export default {
    name: 'nv-switch',
    props: {
      value: {},
      label: {
        type: [String, Number, Boolean],
        required: true
      },
      name: String,
      disabled: Boolean
    },
    computed: {
      val: {
        get() {
          return this.value === this.label
        },
        set(val) {
          this.$emit('input', val)
          this.$emit('change', val)
        }
      }
    },
  }
</script>