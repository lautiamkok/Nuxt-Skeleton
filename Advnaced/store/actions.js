'use strict'

export default {
  async fetchLayout ({ state, commit, rootState }) {
    const data = 'dark' // get the data from the remote API for example.
    commit('setLayout', data)
  },

  async fetchCart ({ state, commit, rootState }) {
    const data = 'dark' // get the data from the remote API for example.
    commit('setCart', data)
  }
}
