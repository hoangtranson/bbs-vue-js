import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from './logger';

import articles from './articles';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    articles
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
