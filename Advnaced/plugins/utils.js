'use strict'

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

// Inject in $root & context
export default (ctx, inject) => {
  inject('getAsset', getAsset)
  inject('getStatic', getStatic)
}
