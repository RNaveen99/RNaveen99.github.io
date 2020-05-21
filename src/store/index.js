import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: `Naveen ${new Date().getSeconds()}`,
  },
  mutations: {},
  actions: {},
  modules: {},
})
