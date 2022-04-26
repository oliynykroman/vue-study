import Vue from "vue";
import Vuex from "vuex";
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: null,
    userData: null
  },
  getters: {
    USERS: state => {
      return state.users;
    },
    USERDATA: state => {
      return state.userData;
    }
  },
  mutations: {
    SET_USERS: (state, payload) => {
      state.users = payload;
    },
    SET_USERDATA: (state, payload) => {
      state.userData = payload;
    }
  },
  actions: {
    SET_USERS: (context, payload) => {
      context.commit('SET_USERS', payload);
    },
    SET_USERDATA: (context, payload) => {
      context.commit('SET_USERDATA', payload);
    },
  },
  modules: {},
});
