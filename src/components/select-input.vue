<template>
  <select>
    <option v-for="item in source" v-bind:value="item" v-bind:key="item">
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
}
</script>

<style lang="scss">
</style>
