<template>
  <div>
    {{ $store.state }}
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
  name: 'default',
}
</script>
