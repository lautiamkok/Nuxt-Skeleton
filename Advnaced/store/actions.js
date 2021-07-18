'use strict'

// https://vuex.vuejs.org/guide/actions.html#dispatching-actions

export default {
  async fetchLayout ({ state, commit, rootState }) {
    const data = 'dark' // get the data from the remote API for example.
    commit('setLayout', data)
  }
}
