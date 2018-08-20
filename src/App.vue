<template>
  <div id="container app">
    <h1>{{ bbs_page_title }}</h1>
    <bbs-select v-bind:source="number_list" v-on:data-change="changeNumberList"></bbs-select>
    <bbs-button v-bind:name="'Add new article'"></bbs-button>
    <bbs-table></bbs-table>
  </div>
</template>

<script>
import BbsSelect from './components/select-input';
import BbsButton from './components/button';
import BbsTable from './components/table';

export default {
  name: 'app',
  components: {
    BbsSelect,
    BbsButton,
    BbsTable
  },
  data () {
    return {
      bbs_page_title: 'BBS Article page',
      number_list: [5,10,15],
      list_number: 5
    }
  },
  methods: {
    changeNumberList: function(value){
      this.list_number = value;
    }
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';

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
