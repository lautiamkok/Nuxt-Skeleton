'use strict'

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit }, {}) {
    console.log('nuxtServerInit')
    // let { data } = await $axios.get('/wp-json/api/v1/menu')
    // commit('setMenu', data)
  }
}
