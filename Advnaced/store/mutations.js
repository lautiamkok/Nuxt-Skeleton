'use strict'

export default {
  updateCart (state, data) {
    state.cart.push(data)
  },

  setLayout (state, data) {
    state.layout = data
  },
}
