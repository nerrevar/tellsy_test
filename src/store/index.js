import { createStore } from 'vuex'

export default createStore({
  state: { users: [] },
  mutations: {
    setUsers (state, payload) {
      state.users = payload.users
    },
  },
  actions: {},
  modules: {},
})
