'use strict'

// Server-only plugin sample.

// Usage in `asyncData` in the <script> block:
// $square(2)

// Usage in `mounted` in the <script> block:
// this.$square(2)

// Usage in the <template> block:
// {{ $square(2) }}

export default ({ app }, inject) => {
  inject('square', x => x * x)
}
