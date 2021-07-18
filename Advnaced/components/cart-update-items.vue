<template>
  <div>
    <slot
      v-bind:updateItems="updateItems"
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
    update (event) {
      this.item.id = this.id
      this.item.title = this.title
      this.item.url = this.url

      this.$store.dispatch('updateItems', this.item)
    }
  }
}
</script>
