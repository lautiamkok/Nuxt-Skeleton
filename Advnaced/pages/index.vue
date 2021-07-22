<template>
  <div class="bg-yellow-500">
    <h1>{{ data.title }}</h1>
    <p class="text-red">{{ data.content }}</p>

    <cart-add-item
      v-slot="{ add }"
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
        v-on:click.prevent="add"
      >Add 1</button>

    </cart-add-item>

    <cart-add-item
      v-slot="{ add }"
      v-bind:id="'2'"
      v-bind:title="'abc'"
      v-bind:url="'/abc'"
    >
      <button
        class="
          bg-gradient-to-r from-green-400 to-blue-500
          m-4 px-4 py-3 text-white text-center italic rounded cursor-default
          transition-all duration-400
          hover:rounded-2xl
          dark:(from-teal-400 to-yellow-500)
        "
        v-on:click.prevent="add"
      >Add 2</button>

    </cart-add-item>



    <client-only>
      <cart-update-items
        v-slot="{ update, empty, updateItemQuantity, deleteItem, items }"
      >
        <div
          v-for="( item, index ) in items"
          v-bind:key="item.timestamp"
        >
          <h3 class="font-600">
            <a
              v-bind:href="item.url"
              v-html="item.title"
            ></a>
          </h3>

          <input
            type="number"
            name="quantity"
            min="1"
            max="1000"
            v-bind:value="item.quantity"
            v-on:input="updateItemQuantity"
            v-bind:data-id="item.id"
          >

          <button
            v-on:click.prevent="deleteItem"
            v-bind:data-id="item.id"
          >Delete</button>
        </div>

        <button
          v-on:click.prevent="update"
        >Update Cart</button>

        <button
          class="
            bg-gradient-to-r from-green-400 to-blue-500
            m-4 px-4 py-3 text-white text-center italic rounded cursor-default
            transition-all duration-400
            hover:rounded-2xl
            dark:(from-teal-400 to-yellow-500)
          "
          v-on:click.prevent="empty"
        >Empty Cart</button>

      </cart-update-items>

    </client-only>

    <div class="container mx-auto">

      <p>Grid</p>

      <div class="grid grid-cols-3 gap-4 <lg:grid-cols-2 <sm:grid-cols-1">
        <div>
          <img src="~/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
        </div>
        <div>
          <img src="~/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
        </div>
        <div>
          <img src="/jeremy-bishop-dvACrXUExLs-unsplash.jpg">
        </div>
      </div>

      <h2>Flex</h2>

      <h3>Desktop first</h3>

      <div class="flex flex-wrap justify-center items-center w-full px-1.5">
        <div class="w-1/2 <sm:w-full px-2.5">
          <img src="~/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
        </div>
        <div class="w-1/2 <sm:w-full px-2.5">
          <img src="~/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
        </div>
        <div class="w-1/2 <sm:w-full px-2.5">
          <img src="/jeremy-bishop-dvACrXUExLs-unsplash.jpg">
        </div>
      </div>

      <p>Flex: callapse padding on small</p>

      <div class="flex flex-wrap justify-center items-center w-full px-1.5 <sm:px-0">
        <div class="w-1/2 <sm:(p-0 w-full) px-2.5">
          <img src="~/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
        </div>
        <div class="w-1/2 <sm:(p-0 w-full) px-2.5">
          <img src="~/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
        </div>
        <div class="w-1/2 <sm:(p-0 w-full) px-2.5">
          <img src="/jeremy-bishop-dvACrXUExLs-unsplash.jpg">
        </div>
      </div>

      <h3>Mobile first</h3>

      <div class="flex flex-wrap justify-center items-center w-full px-1.5">
        <div class="w-full sm:w-1/2 px-2.5">
          <img src="~/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
        </div>
        <div class="w-full sm:w-1/2 px-2.5">
          <img src="~/assets/images/matheus-bandoch-mkdI8JN6sDU-unsplash.jpg">
        </div>
        <div class="w-full sm:w-1/2 px-2.5">
          <img src="/jeremy-bishop-dvACrXUExLs-unsplash.jpg">
        </div>
      </div>

    </div>

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
  }
}
</script>

<style>
/*.flex-wrap > div {
  padding-right: 0.625rem;
  padding-left: 0.625rem;
}*/
</style>
