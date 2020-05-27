import Vue from 'vue'
import Vuex from 'vuex'
import projects from '@/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects,
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getProject(state) {
      return (id) => {
        for (const project of state.projects) {
          if (project.id === id) {
            return project
          }
        }
      }
    },
  },
})
