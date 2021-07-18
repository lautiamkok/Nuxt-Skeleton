'use strict'

export default {
  setCart (state, cart) {
    state.cart = cart
  },

  setProduct (state, product) {
    state.cart.push(product)
  },

  setLayout (state, data) {
    state.layout = data
  },
}
