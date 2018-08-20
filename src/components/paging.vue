<template>
  <div class="pagination">
    <button id="pagination_prev" @click="onPrev">Prev</button>
    <button id="pagination_next" @click="onNext">Next</button>
  </div>
</template>

<script>
export default {
  name: "BbsPaging",
  methods: {
    onPrev: function(e) {
      this.$emit("prev", true);
    },
    onNext: function(e) {
      this.$emit("next", true);
    }
  }
};
</script>

<style lang="scss">
</style>
