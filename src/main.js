import Vue from 'vue';
import App from './App.vue';

import BbsButtonDial from './components/button-dial';
import BbsTable from './components/table';
import BbsModal from './components/modal-create-article';
import TablePagination from './components/paging';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTrash, faPen, faPlus);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);

Vue.component(BbsButtonDial.name, BbsButtonDial);
Vue.component(BbsTable.name, BbsTable);
Vue.component(BbsModal.name, BbsModal);
Vue.component(TablePagination.name, TablePagination);

new Vue({
  el: '#app',
  render: h => h(App)
})

