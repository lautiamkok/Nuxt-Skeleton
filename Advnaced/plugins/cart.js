'use strict'

// Client-only plugin.

import localforage from 'localforage'

export default async ({ store }) => {
  // Accesss the "cart" localstorage.
  // If null then set the cart.
  let cart = await localforage.getItem('cart')
  if (cart === null) {
    cart = await localforage.setItem('cart', [])
  }

  // If not null and not empty then set it to data.
  if (cart !== null && cart.length > 0) {
    store.dispatch('populateCart', cart)
  }
}
