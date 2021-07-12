'use strict'

// Client-only plugin sample.

// Usage in the <script> block:
// this.$divide(10, 2)

// Error if used on the server side in `asyncData` when the app is running on the server side:
// "Cannot read property 'status' of undefined"

// Error if used on the server side in the `<template>` block when the app is running on the server side:
// "_vm.$divide is not a function"

export default ({ app }, inject) => {
  inject('divide', (x, y) => x / y)
}
