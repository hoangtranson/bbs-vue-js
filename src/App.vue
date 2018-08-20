<template>
  <div class="container">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <bbs-button-dial v-on:add-article="openModal"></bbs-button-dial>
        <bbs-table
          v-bind:source="dataTable"
          v-on:delete-item="deleteArticle"
          v-on:edit-item="editArticle"></bbs-table>
      </div>

      <bbs-modal
        v-if="showModal"
        v-on:close-modal="closeModal"></bbs-modal>
    </div>
  </div>
</template>

<script>
import BbsSelect from './components/select-input';
import BbsButtonDial from './components/button-dial';
import BbsTable from './components/table';
import BbsPaging from './components/paging';
import ArticleDetail from './components/article-detail';
import BbsModal from './components/modal-create-article';
import Database from './database/index.js';

export default {
  name: 'app',
  components: {
    BbsSelect,
    BbsButtonDial,
    BbsTable,
    BbsPaging,
    ArticleDetail,
    BbsModal
  },
  data () {
    return {
      number_list: [5,10,15],
      row_per_page: 5,
      current_page: 0,
      showModal: false
    }
  },
  methods: {
    changeNumberList: function(value) {
      this.row_per_page = value;
      // re render DOM
    },
    addArticle: function(e) {
      console.log('addArticle => ', e);
    },
    deleteArticle: function(data) {
      console.log('deleteArticle => ', data);
    },
    editArticle: function(data) {
      console.log('editArticle => ', data);
    },
    nextPage: function(e){
      console.log('next page', e);
    },
    prevPage: function(e){
      console.log('prev page', e);
    },
    closeModal: function(e) {
      this.showModal = false;
    },
    openModal: function(e) {
      this.showModal = true;
    }
  },
  computed: {
    dataTable: function(){
      Database.init();
      return Database.getArticle();
    }
  }
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
