'use strict'

// Server-only plugin sample.

// Usage in the <script> block:
// $subtract(10, 2)

// Error if used on the server side in `asyncData` when the app is running on the client side:
// "Cannot read property 'status' of undefined"

// Error if used on the server side in the `<template>` block when the app is running the client side:
// "_vm.$subtract is not a function"

// Error if used on the `mounted` hook:
// "this.$subtract is not a function"

export default ({ app }, inject) => {
  inject('subtract', (x, y) => x - y)
}
