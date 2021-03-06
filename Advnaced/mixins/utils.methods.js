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

// Use a flag to avoid registering it multiple times and make sure to pick a
// unique name for the flag so it won't conflict with any other mixin.
if (!Vue.__utils_mixin__) {
  Vue.__utils_mixin__ = true
  Vue.mixin({
    methods: {
      hello (name) {
        return `hello, ${name}`
      }
    }
  })
}
