<template>
  <div>
    <md-table v-model="source" md-card @md-selected="onSelect">
      <md-table-toolbar>
        <h1 class="md-toolbar-section-start">Article List</h1>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
        <md-table-cell md-label="Title" md-sort-by="title">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Author" md-sort-by="author">{{ item.author }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Updated Date" md-sort-by="updatedDate">{{ item.updatedDate }}</md-table-cell>
      </md-table-row>
    </md-table>

    <table-pagination
      v-bind:totalPage="totalPage"
      v-bind:rowPerPage="rowPerPage"
      v-bind:pageNumber="pageNumber"
      v-on:updateRow="setRowPerPage"
      v-on:goPrev="goPrevPage"
      v-on:goNext="goNextPage">
    </table-pagination>

    <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>
        Do you like to
        <md-button class="md-icon-button md-primary" @click="deleteData">
          <font-awesome-icon icon="trash"/>
        </md-button>
        <md-button class="md-icon-button md-primary" @click="editData">
          <font-awesome-icon icon="pen"/>
        </md-button>
        {{selectedArticle}}
      </span>
      <md-button class="md-primary" @click="showSnackbar = false">Close</md-button>
    </md-snackbar>
  </div>
</template>

<script>

import chunk from '../utils/chunk.js';

export default {
  name: "BbsTable",
  props: {
    source: {
      type: Array,
      required: true
    },
    mdPage: {
      type: Number,
      default: 1
    },
  },
  data() {
    return {
      selected: [],
      showSnackbar: false,
      position: "center",
      duration: 4000,
      isInfinity: true,
      rowPerPage: 5,
      pageNumber: 1
    };
  },
  methods: {
    onSelect(items) {
      this.selected = items;
      this.showSnackbar = true;
    },
    deleteData() {
      this.$emit("delete-item", this.selected);
      this.showSnackbar = false;
    },
    editData() {
      this.$emit("edit-item", this.selected);
      this.showSnackbar = false;
    },
    setRowPerPage(rowNum) {
      this.rowPerPage = rowNum;
      this.pageNumber = 1;
    },
    goPrevPage(page) {
      this.pageNumber = page;
    },
    goNextPage(page) {
      this.pageNumber = page;
    }
  },
  computed: {
    selectedArticle: function() {
      return this.selected.title;
    },
    totalPage: function(){
      const chunkData = chunk(this.source, this.rowPerPage);
      return chunkData.length;
    },
    dataDisplay: function(){
      const chunkData = chunk(this.source, this.rowPerPage);
      return chunkData[this.pageNumber - 1];
    }
  }
};
</script>

<style lang="scss">
.md-snackbar-content .md-button {
  margin: -8px -8px -8px 0;
}

.md-snackbar-content .md-button + .md-button {
  margin-left: 0;
}
</style>
