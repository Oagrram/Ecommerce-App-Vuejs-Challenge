import Vue from "vue";
import Vuex from "vuex";

import { GetResources } from "../services/GetResources";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Products: [],
    cart: [],
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.Products = data;
    },
    AddToCart(state,product){
      state.cart.push(product)
    }
  },
  actions: {
    async getData({ commit }) {
      commit("setProducts", await GetResources());
    },
  },
  modules: {},
});
