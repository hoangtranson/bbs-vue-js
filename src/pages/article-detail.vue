<template>
  <div class="container" id="app">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <div class="md-title">Title:  {{detailArticle.title}}</div>
            <div class="md-subhead">Author: {{detailArticle.author}}</div>
            <div class="md-subhead">Email: {{detailArticle.email}}</div>
          </md-card-header>
          <md-card-content>
            {{detailArticle.content}}
          </md-card-content>

          <md-card-actions md-alignment="left">
            <md-button class="md-icon-button" @click="goBack">
              <font-awesome-icon icon="arrow-left"/>
            </md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'article-detail',
  mounted () {
    this.$store.dispatch('LOAD_AN_ARTICLE', this.$route.params.id);
  },
  computed: {
    ...mapGetters([
      'detailArticle'
    ])
  },
  methods: {
    goBack: function() {
      window.location.href = 'http://localhost:8081';
    }
  }
}
</script>

<style lang="scss">
.container{
  margin: 50px 50px 50px 50px;
}
</style>
