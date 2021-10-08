import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lists: []
  },
  mutations: {
    addList(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    }
  },
  actions: {
    addList(context, payload) {
      context.commit('addList', payload)
    }
  },
  getters: {
  }
})
