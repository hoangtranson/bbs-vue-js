<template>
  <div class="article-detail">
    <!-- <font-awesome-icon icon="pen" />
    <font-awesome-icon icon="trash" /> -->
    <div>{{source.title}}</div>
    <div>{{source.author}}</div>
    <div>{{source.email}}</div>
    <div>{{source.updatedDate}}</div>
    <div>{{source.viewCount}}</div>
    <div>{{source.content}}</div>
  </div>
</template>

<script>
export default {
  name: "ArticleDetail",
  props: {
    source: {
      type: Object,
      required: true
    }
  },
  methods: {
    onEdit: function(e) {
      // const index = e.target.options.selectedIndex;
      // this.$emit("data-change", this.source[index]);
    },
    onRemove: function(e) {
      // const index = e.target.options.selectedIndex;
      // this.$emit("data-change", this.source[index]);
    }
  }
};
</script>

<style lang="scss">
</style>
