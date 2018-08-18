<template>
  <select v-on:change="onChange">
    <option
      v-for="item in source"
      v-bind:value="item"
      v-bind:key="item"
    >
      {{ item }}
    </option>
  </select>
</template>

<script>

export default {
  name: 'BbsSelect',
  props: {
    source: Array,
    required: true
  },
  methods: {
    onChange: function(e) {
      const index = e.target.options.selectedIndex;
      this.$emit('data-change', this.source[index]);
    }
  }
}
</script>

<style lang="scss">
</style>
