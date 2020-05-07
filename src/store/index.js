import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '冯志华',
      type: 1,
      id: '1004'
    },
    LOADING: false
  },
  mutations: {
    changeUser(state, user) {
      state.user.name = user.name,
      state.user.type = user.type
      state.user.id = user.id
    },
    showLoading(state) {
      state.LOADING = true
    },
    hideLoading(state) {
      state.LOADING = false
    }
  },
  actions: {
    // SHOW_LOADING({commit},show) {
    //   commit(constant.SHOW_LOADING, show)
    // }
  },
  modules: {
  }
})
