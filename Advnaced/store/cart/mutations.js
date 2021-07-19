'use strict'

export default {
  setItems (state, items) {
    state.items = items
  },

  setItem (state, item) {
    state.items.push(item)
  },

  setItemQuantity (state, item) {
    // Find the index of the current element.
    // https://flaviocopes.com/how-to-get-index-item-array-javascript/
    const index = state.items.findIndex((element, index) => {
      if (element.id === item.id) {
        return true
      }
    })

    state.items[index].quantity = item.quantity
  },

  unsetItem (state, item) {
    // Find the index of the current element.
    // https://flaviocopes.com/how-to-get-index-item-array-javascript/
    const index = state.items.findIndex((element, index) => {
      if (element.id === item.id) {
        return true
      }
    })

    // Delete the item from store.
    state.items.splice(index, 1)
  }
}
