<template>
  <div class="container" id="app">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <bbs-button-dial v-on:add-article="openModal"></bbs-button-dial>
        <bbs-table
          v-bind:source="articles"
          v-on:delete-item="deleteArticle"
          v-on:edit-item="editArticle"></bbs-table>
      </div>

      <bbs-modal
        v-if="showModal"
        v-bind:source="editedData"
        v-on:close-modal="closeModal"
        v-on:add-article="addArticle"></bbs-modal>
    </div>
  </div>
</template>

<script>
import FP from './utils/fp.js';

import { mapState } from 'vuex';

export default {
  name: 'app',
  data () {
    return {
      showModal: false,
      // dataTable: Database.getArticle(),
      editedData: {}
    }
  },
  methods: {
    addArticle: function(newArticle) {
      newArticle.id = this.lastId + 1;
      this.$store.dispatch('POST_NEW_ARTICLE', newArticle)
      .then( res => {
        this.$store.dispatch('LOAD_ARTICLE_LIST');
        this.showModal = false;
      });
      // const articleList = Database.getArticle();
      // const index = articleList.findIndex( item => item.id == newArticle.id);
      // if(index > -1) {
      //   articleList[index] = newArticle;
      // } else {
      //   const lastArticle = FP.last(articleList);
      //   newArticle.id = articleList.length > 0 ? lastArticle.id + 1 : 1;
      //   articleList.push(newArticle);
      // }
      // this.dataTable = articleList;
      // Database.saveArticle(this.dataTable);

      // this.editedData = {};
    },
    deleteArticle: function(deletedData) {
      // this.dataTable = Database.getArticle().filter( item => item.id != deletedData.id);
      // Database.saveArticle(this.dataTable);
    },
    editArticle: function(editedData) {
      // this.editedData = {...editedData};
      // this.showModal = true;
    },
    closeModal: function(e) {
      this.showModal = false;
    },
    openModal: function(e) {
      this.showModal = true;
    }
  },
  computed: mapState({
    articles: state => state.articles.articleList,
    lastId: state => state.articles.lastId,
  }),
  created () {
    this.$store.dispatch('LOAD_ARTICLE_LIST');
  },
}
</script>

<style lang="scss">

.md-layout-item {
  height: 40px;

  &:after {
    width: 100%;
    height: 100%;
    display: block;
    background: md-get-palette-color(red, 200);
    content: " ";
  }
}
</style>
