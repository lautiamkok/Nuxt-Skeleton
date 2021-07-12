'use strict'

// Create custom Nuxt utils that can be used both on the server side and client side.

function getAsset (file) {
  if (!file) {
    return
  }
  return require('~/assets/images/' + file)
}

function getStatic (file) {
  if (!file) {
    return
  }
  return '/' + file
}

async function delay (ms) {
  return new Promise(res => {
    setTimeout(res, ms)
  })
}

// Inject in $root & context
export default (ctx, inject) => {
  inject('getAsset', getAsset)
  inject('getStatic', getStatic)
  inject('delay', delay)
}
