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

async function delay (ms) {
  return new Promise(res => {
    setTimeout(res, ms)
  })
}

export {
  delay,
  getAsset,
  getStatic,
}
