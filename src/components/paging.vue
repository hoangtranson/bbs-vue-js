<template>
  <div class="pagination">
    <button id="pagination_prev">Prev</button>
    <button id="pagination_next">Next</button>
  </div>
</template>

<script>
export default {
  name: "BbsPaging",
  props: {
    // columns: {
    //   type: Array,
    //   required: true
    // },
    // source: {
    //   type: Array,
    //   required: true
    // }
  },
  methods: {
    onPrev: function(e) {
      // const index = e.target.options.selectedIndex;
      // this.$emit("data-change", this.source[index]);
    },
    onNext: function(e) {
      // const index = e.target.options.selectedIndex;
      // this.$emit("data-change", this.source[index]);
    }
  }
};
</script>

<style lang="scss">
</style>
