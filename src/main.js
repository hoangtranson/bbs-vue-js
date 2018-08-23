import Vue from 'vue';
import VueRouter from 'vue-router';

import BbsButtonDial from './components/button-dial';
import BbsTable from './components/table';
import BbsModal from './components/modal-create-article';
import TablePagination from './components/paging';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPen, faPlus, faEye, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import store from './store';

// import notFound from './pages/404';
import app from './App.vue';
import articleDetail from  './pages/article-detail';

library.add(faTrash, faPen, faPlus, faEye, faArrowLeft);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(VueRouter);

Vue.component(BbsButtonDial.name, BbsButtonDial);
Vue.component(BbsTable.name, BbsTable);
Vue.component(BbsModal.name, BbsModal);
Vue.component(TablePagination.name, TablePagination);

const router = new VueRouter({
  routes: [
    { path: '/', component: app },
    { path: '/article/:id', component: articleDetail }
  ]
});

new Vue({
  el: '#app',
  router,
  store
});
