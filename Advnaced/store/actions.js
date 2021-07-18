'use strict'

// https://vuex.vuejs.org/guide/actions.html#dispatching-actions

// Local database.
// https://www.npmjs.com/package/localforage
import localforage from 'localforage'
import _ from 'lodash'

export default {
  async fetchLayout ({ state, commit, rootState }) {
    const data = 'dark' // get the data from the remote API for example.
    commit('setLayout', data)
  }
}
