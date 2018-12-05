<template>
  <label class="nv-switch" role="switch" :tabindex="disabled ? -1 : 0">
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
      label: [String, Number, Boolean],
      name: String,
      disabled: Boolean
    },
    computed: {
      val: {
        get() {
          return this.value
        },
        set(val) {
          this.$emit('input', val)
          this.$emit('change', val)
        }
      }
    },
  }
</script>