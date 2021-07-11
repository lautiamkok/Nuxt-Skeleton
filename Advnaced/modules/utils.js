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

export {
  getAsset,
  getStatic,
}
