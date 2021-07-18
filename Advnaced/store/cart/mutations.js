'use strict'

export default {
  setItems (state, items) {
    state.items = items
  },

  setItem (state, item) {
    state.items.push(item)
  }
}
