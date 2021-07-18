'use strict'

// https://vuex.vuejs.org/guide/actions.html#dispatching-actions

// Local database.
// https://www.npmjs.com/package/localforage
import localforage from 'localforage'
import _ from 'lodash'

export default {
  async populate ({ state, commit, rootState }, items) {
    commit('setItems', items)
  },

  async empty ({ state, commit, rootState }, items) {
    commit('setItems', [])

    // Reset the items in the localstorage.
    await localforage.setItem('cart', [])
  },

  async update ({ state, commit, rootState }, items) {
    // Remove items where quantity is 0.
    // https://lodash.com/docs/4.17.15#remove
    // https://www.codegrepper.com/code-examples/javascript/lodash+remove+element+from+list
    _.remove(items, item => Number(item.quantity) === 0)

    // Reset before update.
    commit('setItems', [])
    commit('setItems', items)

    // Reset the items in the localstorage.
    await localforage.setItem('cart', items)
  },

  async addItem ({ state, commit, rootState }, item) {
    let cart = await localforage.getItem('cart')

    // Don't push the item if it exists already.
    // Find the match using meta because the quantity can change.
    // https://lodash.com/docs/4.17.15#some
    // https://stackoverflow.com/a/25171174/413225
    const exist = _.some(cart, { id: item.id })
    if (exist === true) {
      return
    }

    commit('setItem', item)

    // Make sure that only uniq items are updated to the localstorage cart.
    // https://lodash.com/docs/4.17.15#uniqWith
    const uniq = _.uniqWith(state.items, _.isEqual)
    if (state.items.length > 0) {
      await localforage.setItem('cart', uniq)
    }
  },

  updateItemQuantity ({ state, commit, rootState }, item) {
    commit('setItemQuantity', item)
  }
}
