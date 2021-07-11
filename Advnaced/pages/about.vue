<template>
  <div class="bg-green-500">
    <h1>{{ data.title }}</h1>
    <p class="text-blue">{{ data.content }}</p>

    <img :src="thumbnail">
    <img :src="static">

    <img :src="$getAsset(data.thumbnail)" v-if="data.thumbnail">

    <div class="box">
      <div class="text-center space-y-2">
        <div class="space-y-0.5">
          <p class="text-lg text-black dark:text-white font-semibold mb-2">
            Erin Lindford
          </p>
          <p class="text-gray-500 dark:text-gray-300 font-medium pb-3">
            Product Engineer
          </p>
        </div>
        <button class="btn">
          Message
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Modules and functions imported in here only can be used in the <script> block,
// not in the <template> block. Unlike vanilla Vue apps.
import axios from '@/modules/axios'
import { getAsset, getStatic } from '@/modules/utils'

export default {
  name: 'about',

  async asyncData ({ route, error, $getAsset }) {
    try {
      // Using a custom axios module.
      let { data } = await axios.get(route.path)

      return {
        data,
        static: getStatic(data.static),
        thumbnail: $getAsset(data.thumbnail)
      }
    } catch (err) {
      // Handle err
      // console.log(err)

      // The err object will contain the response property:
      if (err.response) {
        console.log('err.response.statusText =', err.response.statusText)
        console.log('err.response.status =', err.response.status)
        console.log('err.response.headers =', err.response.headers)
      }

      error({
        statusCode: err.response.status,
        message: err.message
      })

      // Vanilla Vue:
      // Push to the generic error page.
      // this.$router.push({
      //   name: 'errors', // or, 404
      //   params: {
      //     pathMatch: this.$route.path.substring(1).split('/'),
      //     statusCode: error.response.status,
      //     message: error.message
      //   },
      // })
    }
  },

  // The middleware applied here only can change the layout on the client side,
  // not when it is executed on the server side.
  // async beforeRouteEnter(to, from, next) {
  //   console.log("before route called");
  //   const previousRoute = from.path || from.fullPath
  //   console.log(`Previous Route ${previousRoute}`)

  //   let slug = to.params.slug ? to.params.slug : to.name
  //   if (slug === undefined) {
  //     next()
  //   }

  //   const apiBaseUrl = process.env.remoteApiBaseUrl
  //   const { data } = await axios.get(`/${slug}`)
  //   console.log(data.layout)
  //   to.meta.layout = data.layout
  //   next()
  // },

  // The middleware applied here will be executed after the layout property.
  // middleware: ['layout'],

  // https://nuxtjs.org/docs/2.x/directory-structure/layouts
  layout (context) {
    console.log('about.vue -> layout -> context.layout =', context.layout)
    let layout = context.layout
    // if (process.server) {
    //   layout = 'dark'
    // }
    return layout
  },
}
</script>

<style>
  .box {
    @apply
      py-8 px-8 max-w-sm mx-auto
      bg-white dark:bg-gray-400 dark:bg-opacity-10
      rounded-xl shadow-md space-y-2
      sm:py-6 sm:flex sm:items-center sm:space-y-0 sm:space-x-6;
  }
  .btn {
    @apply
      px-4 py-1 text-sm text-purple-600 font-semibold
      rounded-full border border-purple-200 dark:border-purple-800
      hover:text-white hover:bg-purple-600 hover:border-transparent
      focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2;
  }
</style>
