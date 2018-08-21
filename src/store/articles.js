import axios from 'axios';

const API_URL = "http://localhost:3000";

export default {
  state: {
    articleList: [],
    lastId: 2
  },
  actions: {
    LOAD_ARTICLE_LIST: function ({ commit }) {
      axios.get(`${API_URL}/articles`).then((response) => {
        commit('SET_ARTICLE_LIST', { list: response.data });
        commit('SET_ID', { list: response.data })
      });
    },
    getArticleById({commit}, id){
      // axios.get(`${API_URL}/articles/${id}`)
    },
    POST_NEW_ARTICLE: function({commit}, data){
      axios.post(`${API_URL}/articles`, data).then((response) => {
        commit('ADD_AN_ARTICLE', { item: data });
        // commit('SET_ID', { list: response.data })
      });
    },
    updateArticle({commit}, data){
      // axios.put(`${API_URL}/articles/${data.id}`, data)
    },
    deleteArticleById({commit}, id){
      // axios.delete(`${API_URL}/articles/${id}`)
    }
  },
  mutations: {
    SET_ARTICLE_LIST: (state, { list }) => {
      state.articleList = list;
    },
    ADD_AN_ARTICLE: (state, { item }) => {
      // state.articleList = list;
      console.log('ADD_AN_ARTICLE=> ', item);
    },
    SET_ID: (state, { list }) => {
      const idList = list.map( item => item.id);
      state.lastId = Math.max(...idList);
    }
  },
  getters: {
  }
}
