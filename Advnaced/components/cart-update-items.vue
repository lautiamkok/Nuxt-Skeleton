<template>
  <div>
    <slot
      v-bind:items="items"
      v-bind:update="update"
      v-bind:updateItemQuantity="updateItemQuantity"
    >
    </slot>
  </div>
</template>

<script>
export default {
  computed: {
    items () {
      return this.$store.state.cart.items
    }
  },

  methods: {
    update (event) {
      this.$store.dispatch('cart/update', this.items)
    },

    updateItemQuantity (event) {
      const button = event.target
      const dataset = button.dataset

      this.$store.dispatch('cart/updateItemQuantity', {
        id: dataset.id,
        quantity: event.target.value
      })
    }
  }
}
</script>
