'use strict'

// Create Vue utils that can be used when DOM is ready.
// Always client only whether you set the mode property or not.

import Vue from 'vue'

// Promisise setTimeout.
// Usage:
// await this.$delay(500)
Vue.prototype.$delay = ms => new Promise(res => {
  setTimeout(res, ms)
})
