<template>
  <div class="bg-yellow-500">
    <h1>{{ data.title }}</h1>
    <p class="text-red">{{ data.content }}</p>

    <AddProduct
      v-slot="{ addProduct }"
      v-bind:id="'1'"
      v-bind:title="'xyz'"
      v-bind:url="'/xyz'"
    >
      <button
        class="
          bg-gradient-to-r from-green-400 to-blue-500
          m-4 px-4 py-3 text-white text-center italic rounded cursor-default
          transition-all duration-400
          hover:rounded-2xl
          dark:(from-teal-400 to-yellow-500)
        "
        v-on:click.prevent="addProduct"
      >Add</button>

    </AddProduct>

    <button
      class="
        bg-gradient-to-r from-green-400 to-blue-500
        m-4 px-4 py-3 text-white text-center italic rounded cursor-default
        transition-all duration-400
        hover:rounded-2xl
        dark:(from-teal-400 to-yellow-500)
      "
      v-on:click.prevent="emptyCart"
    >Clear</button>

    <img src="~/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
    <img src="/jeremy-bishop-dvACrXUExLs-unsplash.jpg">
  </div>
</template>

<script>
import axios from '@/modules/axios'

export default {
  name: 'home',

  async asyncData () {
    // Vanilla fetch API.
    // let res = await fetch('http://localhost:3004/home')
    // this.data = await res.json()

    // Using a custom plugin
    // let res = await this.$fetch('/home')
    // this.data = await res.json()

    // Using a custom axios.
    let { data } = await axios.get('/home')
    return { data }
  },

  methods: {
    emptyCart () {
      this.$store.dispatch('emptyCart')
    }
  }
}
</script>
