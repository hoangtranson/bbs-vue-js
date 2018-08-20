import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrash, faPen);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

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

