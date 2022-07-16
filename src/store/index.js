import { createStore } from 'vuex'

export default createStore({
  state: {
    currentYear: new Date().getFullYear(),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getYear(state){
      return state.currentYear;
    },
  }
})
