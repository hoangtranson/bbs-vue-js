import Vue from 'vue'
import App from './App.vue'


Vue.component('number-list', {
  props: {
    source: Array
  },
  data: function () {
    return {
      selected: 5
    }
  },
  template: '#number-list'
});

new Vue({
  el: '#app',
  render: h => h(App)
})

