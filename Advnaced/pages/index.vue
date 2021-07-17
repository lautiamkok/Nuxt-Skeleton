<template>
  <div class="bg-yellow-500">
    <h1>{{ data.title }}</h1>
    <p class="text-red">{{ data.content }}</p>

    <button class="
      bg-gradient-to-r from-green-400 to-blue-500
      m-4 px-4 py-3 text-white text-center italic rounded cursor-default
      transition-all duration-400
      hover:rounded-2xl
      dark:(from-teal-400 to-yellow-500)
    ">Preview</button>

    <img src="~/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
    <img src="/jeremy-bishop-dvACrXUExLs-unsplash.jpg">
  </div>
</template>

<script>
import axios from '@/modules/axios'
import localforage from 'localforage'

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

  async mounted () {
    // Accesss the "cart" localstorage.
    // If null then set the cart.
    let cart = await localforage.getItem('cart')
    if (cart === null) {
      cart = await localforage.setItem('cart', [])
    }

    // // If not null and not empty then set it to data.
    // if (cart !== null && cart.length > 0) {
    //   this.cart = cart
    // }

    this.$store.dispatch('addProduct', { id: 1, name: 'xyy', quanity: 1 })
  }
}
</script>
