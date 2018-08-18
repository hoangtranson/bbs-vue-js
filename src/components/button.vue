<template>
  <button
    :disabled="disabled"
    @click="onClick"
    v-bind="$attrs">
    {{name}}
  </button>
</template>

<script>

export default {
  name: 'BbsButton',
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default:  false,
    },
    primary:  {
      type:     Boolean,
      required: false,
      default:  false,
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    onClick: function(e) {
      console.log(e);
      // this.$emit('data-change', this.source[index]);
    }
  }
}
</script>

<style lang="scss">
</style>
