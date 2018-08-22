import axios from 'axios';

const API_URL = "http://localhost:3000";

export default {
  state: {
    articleList: []
  },
  actions: {
    LOAD_ARTICLE_LIST: function ({ commit }) {
      axios.get(`${API_URL}/articles`).then((response) => {
        commit('SET_ARTICLE_LIST', { list: response.data });
      });
    },
    LOAD_AN_ARTICLE: function({commit}, id) {
      axios.get(`${API_URL}/articles/${id}`);
    },
    POST_NEW_ARTICLE: function({commit}, data){
      axios.post(`${API_URL}/articles`, data).then((response) => {
        commit('ADD_AN_ARTICLE', { item: data });
      });
    },
    UPDATE_AN_ARTICLE: function({commit}, data) {
      axios.put(`${API_URL}/articles/${data.id}`, data).then((response) => {
        commit('ADD_AN_ARTICLE', { item: data });
      });
    },
    DELETE_AN_ARTICLE: function({commit}, id) {
      axios.delete(`${API_URL}/articles/${id}`).then((response) => {
        commit('REMOVE_ARTICLE_LIST', id);
      });
    }
  },
  mutations: {
    SET_ARTICLE_LIST: (state, { list }) => {
      state.articleList = JSON.parse(JSON.stringify(list));
    },
    ADD_AN_ARTICLE: (state, { item }) => {
      const newData = [...state.articleList];
      const index = newData.findIndex( _i => _i.id == item.id);

      if(index > -1) {
        newData[index] = item;
      } else {
        newData.push(item);
      }

      state.articleList = newData;
    },
    REMOVE_ARTICLE_LIST: (state, id) => {
      state.articleList = state.articleList.filter( item => item.id != id);
    }
  },
  getters: {
    articleList: (state, getters, rootState) => {
      return state.articleList;
    },
    lastId : (state, getters, rootState) => {
      const idList = getters.articleList.map( item => item.id);
      return Math.max(...idList);
    }
  }
}
