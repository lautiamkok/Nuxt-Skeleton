<template>
  <div class="dark">
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
    <Nuxt />

    <current-breakpoint/>

  </div>
</template>

<script>
export default {
  name: 'dark',
}
</script>

<style scoped>
.dark {
  background-color: red;
}
</style>
