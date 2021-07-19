<template>
  <div>
    <slot
      v-bind:items="items"
      v-bind:empty="empty"
      v-bind:update="update"
      v-bind:updateItemQuantity="updateItemQuantity"
      v-bind:deleteItem="deleteItem"
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
    empty (event) {
      this.$store.dispatch('cart/empty')
    },

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
    },

    deleteItem (event) {
      const button = event.target
      const dataset = button.dataset

      this.$store.dispatch('cart/deleteItem', {
        id: dataset.id
      })
    }
  }
}
</script>
