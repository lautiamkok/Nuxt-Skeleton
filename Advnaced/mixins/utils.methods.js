'use strict'

// Create and install mixind.

// https://v3.vuejs.org/guide/mixins.html#basics
// export default {
//   methods: {
//     hello (name) {
//       return `hello, ${name}`
//     }
//   }
// }

import Vue from 'vue'

Vue.mixin({
  methods: {
    hello (name) {
      return `hello, ${name}`
    }
  }
})
