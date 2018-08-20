<template>
  <div id="app" class="container">
    <h1>{{ bbs_page_title }}</h1>
    <bbs-button v-bind:name="'Add new article'"></bbs-button>
    <div class="row">
      <div class="col">
        <bbs-select v-bind:source="number_list" v-on:data-change="changeNumberList"></bbs-select>
        <bbs-table v-bind:columns="colunms" v-bind:source="dataTable" v-on:view-data="viewData"></bbs-table>
        <bbs-paging></bbs-paging>
      </div>
      <div class="col">
        <article-detail v-bind:source="viewItem"></article-detail>
      </div>
    </div>
  </div>
</template>

<script>
import BbsSelect from './components/select-input';
import BbsButton from './components/button';
import BbsTable from './components/table';
import BbsPaging from './components/paging';
import ArticleDetail from './components/article-detail';

import Database from './database/index.js';

export default {
  name: 'app',
  components: {
    BbsSelect,
    BbsButton,
    BbsTable,
    BbsPaging,
    ArticleDetail
  },
  data () {
    return {
      bbs_page_title: 'BBS Article page',
      number_list: [5,10,15],
      list_number: 5,
      colunms: ['Title', 'Author', 'Email', 'Updated date', 'View count'],
      viewItem: {}
    }
  },
  methods: {
    changeNumberList: function(value) {
      this.list_number = value;
    },
    viewData: function(data) {
      this.viewItem = data;
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
@import '../node_modules/bootstrap/scss/bootstrap.scss';
// @import '../node_modules/@fortawesome/fontawesome-free/';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
