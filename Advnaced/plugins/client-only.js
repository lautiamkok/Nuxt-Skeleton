'use strict'

// Client-only plugin sample.

// Usage in `mounted` in the <script> block:
// this.$divide(10, 2)

// Error if used on the server side in `asyncData` when the app is running on the server side:
// "Cannot read property 'status' of undefined"

// Error if used on the server side in the `<template>` block when the app is running on the server side:
// "_vm.$divide is not a function"

export default ({ app, store }, inject) => {
  inject('divide', (x, y) => x / y)

  // Code here are useful when they only can be executed on the client side,
  // like web storage (localStorage and sessionStorage), alert and so on.

  // You will get this alert when loading the app and refreshing browsers.
  // window.alert('I work only on client side')

  // If you have set any data in the web storage, you can retrieve them when
  // loading the app and refreshing browsers, for example:
  const layout = sessionStorage.getItem('layout')

  // If you use store, then you can pass the web storage data to the state of
  // the store.
  // store.dispatch('fetchLayout')
  // store.commit('setLayout', 'dark')
  if (layout === null) {
    store.dispatch('fetchLayout')
  } else {
    store.commit('setLayout', layout)
  }
}
