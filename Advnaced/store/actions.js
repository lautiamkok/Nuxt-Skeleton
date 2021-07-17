'use strict'

// Local database.
// https://www.npmjs.com/package/localforage
import localforage from 'localforage'
import _ from 'lodash'

export default {
  async fetchLayout ({ state, commit, rootState }) {
    const data = 'dark' // get the data from the remote API for example.
    commit('setLayout', data)
  },

  async addProduct ({ state, commit, rootState }, product) {
    console.log('product =', product)
    let cart = await localforage.getItem('cart')
    console.log('cart =', cart)

    // Don't push the item if it exists already.
    // Find the match using meta because the quantity can change.
    // https://lodash.com/docs/4.17.15#some
    // https://stackoverflow.com/a/25171174/413225
    const exist = _.some(cart, { id: product.id })
    if (exist === true) {
      return
    }

    commit('updateCart', product)
  }
}
