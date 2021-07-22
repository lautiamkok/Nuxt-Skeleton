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

    <div class="fixed bottom-0 right-0 py-1.5 px-3 bg-black text-white text-sm">
      <!-- https://gist.github.com/jonsugar/6bce22bd7d3673294caad36046c2b7cb !-->

      <span>Current breakpoint: </span>
      <span class="sm:hidden md:hidden lg:hidden xl:hidden">default (&lt; 640px)</span>
      <span class="hidden sm:inline md:hidden font-extrabold">sm</span>
      <span class="hidden md:inline lg:hidden font-extrabold">md</span>
      <span class="hidden lg:inline xl:hidden font-extrabold">lg</span>
      <span class="hidden xl:inline font-extrabold">xl</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'default',
}
</script>
