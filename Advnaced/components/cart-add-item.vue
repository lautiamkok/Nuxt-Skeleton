<template>
  <div>
    <slot
      v-bind:add="add"
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
      item: {
        id: '',
        title: '',
        url: '',
        quantity: 1
      }
    }
  },

  methods: {
    add (event) {
      this.item.id = this.id
      this.item.title = this.title
      this.item.url = this.url

      this.$store.dispatch('cart/addItem', this.item)
    }
  }
}
</script>
