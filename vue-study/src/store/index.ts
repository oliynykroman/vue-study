import Vue from "vue";
import Vuex from "vuex";

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
    },
    mutations: {
      
    },
    actions: {},
    modules: {},
  });
