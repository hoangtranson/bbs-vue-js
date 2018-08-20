<template>
  <md-speed-dial :class="topPosition" md-direction="bottom">
    <md-speed-dial-target>
      <font-awesome-icon icon="plus"/>
    </md-speed-dial-target>

    <md-speed-dial-content>
      <md-button class="md-icon-button" @click="addArticle">
        <font-awesome-icon icon="plus"/>
      </md-button>
    </md-speed-dial-content>
  </md-speed-dial>
</template>

<script>

export default {
  name: 'BbsButtonDial',
  data () {
    return {
      topPosition: 'md-top-right',
    }
  },
  methods: {
    addArticle: function(e) {
      this.$emit('add-article', true);
    }
  }
}
</script>

<style lang="scss">
.md-speed-dial{
  position: absolute;
  z-index: 9;
}

.md-button.md-theme-default.md-fab:not([disabled]){
  color: #fff;
}
</style>
