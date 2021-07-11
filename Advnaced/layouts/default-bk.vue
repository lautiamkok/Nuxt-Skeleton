<template>
  <div>
    <component :is="layout">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
      <Nuxt />
    </component>
  </div>
</template>

<script>
import axios from 'axios'

// The `:is` attribute is used for dynamic components.
// https://v3.vuejs.org/api/special-attributes.html#is
// https://v3.vuejs.org/guide/component-dynamic-async.html#dynamic-async-components
const defaultLayout = 'white'

// The layouts are components and they are registered locally in the `components` option:
// import Dark from '~/templates/dark.vue'
// import Default from '~/templates/dark.vue'

export default {
  name: 'default',

  computed: {
    layout () {
      console.log('this.$route =', this.$route)
      // return 'white'
      return (this.$route.name + '-xxx' || defaultLayout)

      // const { data } = await axios.get(`${apiBaseUrl}/${slug}`)
      // return 'index-xxx'
    }
  },


}
</script>
