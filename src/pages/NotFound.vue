<template>
  <span class="container">
    <h1>404</h1>
    <p>
      There's nothing in <span class="monospace">{{ $route.path }}</span
      >. Try some other path, or
      <router-link :to="{ name: 'home' }">go home</router-link>!
    </p>
  </span>
</template>
