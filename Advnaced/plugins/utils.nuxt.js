'use strict'

// Create custom Nuxt utils that can be used both on the server side and client side.

import {
  delay,
  getAsset,
  getStatic
} from '@/modules/utils'

// Inject in $root & context
export default (ctx, inject) => {
  inject('getAsset', getAsset)
  inject('getStatic', getStatic)
  inject('delay', delay)
}
