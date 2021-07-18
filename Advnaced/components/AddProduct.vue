<template>
  <div>
    <slot
      v-bind:addProduct="addProduct"
    >
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },

    title: {
      type: String,
      default: ''
    },

    url: {
      type: String,
      default: ''
    },
  },

  data () {
    return {
      product: {
        id: '',
        title: '',
        url: '',
        quantity: 1
      }
    }
  },

  methods: {
    addProduct (event) {
      this.product.id = this.id
      this.product.title = this.title
      this.product.url = this.url

      this.$store.dispatch('addProduct', this.product)
    }
  }
}
</script>
