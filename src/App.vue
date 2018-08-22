<template>
  <div class="container" id="app">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <bbs-button-dial v-on:add-article="openAddNewArticleModal"></bbs-button-dial>
        <bbs-table
          v-bind:source="articleList"
          v-on:delete-item="deleteArticle"
          v-on:edit-item="openEditArticleModal"></bbs-table>
      </div>

      <bbs-modal
        v-if="showModal"
        v-bind:source="editedData"
        v-on:close-modal="closeModal"
        v-on:submit-article="submitArticle"></bbs-modal>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import FP from './utils/fp.js';

export default {
  name: 'app',
  data () {
    return {
      showModal: false,
      editedData: {},
      modalMode: "NEW"
    }
  },
  methods: {
    submitArticle: function(newArticle) {
      this.editedData = {};

      const MODE = {
        "NEW": (article) => {
          article.id = this.lastId + 1;
          this.$store.dispatch('POST_NEW_ARTICLE', article)
          .then( res => {
            this.showModal = false;
          });
        },
        "EDIT": (article) => {
          this.$store.dispatch('UPDATE_AN_ARTICLE', article)
          .then( res => {
            this.showModal = false;
          });
        }
      }

      MODE[this.modalMode](newArticle);
    },
    deleteArticle: function(deletedData) {
      this.$store.dispatch('DELETE_AN_ARTICLE', deletedData.id);
    },
    openEditArticleModal: function(editedData) {
      this.editedData = {...editedData};
      this.showModal = true;
      this.modalMode = "EDIT";
    },
    closeModal: function(e) {
      this.showModal = false;
    },
    openAddNewArticleModal: function(e) {
      this.showModal = true;
      this.modalMode = "NEW";
    }
  },
  computed: {
    ...mapGetters([
      'articleList',
      'lastId'
    ])
  },
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
