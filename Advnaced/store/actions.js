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
  },

  async emptyCart ({ state, commit, rootState }, cart) {
    commit('setCart', [])
    await localforage.setItem('cart', [])
  },

  async populateCart ({ state, commit, rootState }, cart) {
    commit('setCart', cart)
  },

  async addProduct ({ state, commit, rootState }, product) {
    let cart = await localforage.getItem('cart')

    // Don't push the item if it exists already.
    // Find the match using meta because the quantity can change.
    // https://lodash.com/docs/4.17.15#some
    // https://stackoverflow.com/a/25171174/413225
    const exist = _.some(cart, { id: product.id })
    if (exist === true) {
      return
    }

    commit('setProduct', product)

    console.log('state.cart.length =', state.cart.length)

    // Make sure that only uniq items are updated to the localstorage cart.
    // https://lodash.com/docs/4.17.15#uniqWith
    const uniq = _.uniqWith(state.cart, _.isEqual)
    if (state.cart.length > 0) {
      await localforage.setItem('cart', uniq)
    }
  }
}
