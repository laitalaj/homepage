<template>
  <span class="container">
    <h1>
      Redirecting to
      <span class="monospace">{{ $route.params.pdf }}.pdf</span>...
    </h1>
    <p>
      If this doesn't work for some reason,
      <a :href="pdfs[$route.params.pdf]">click here!</a>
    </p>
  </span>
</template>

<script>
import pdfs from "../../assets/pdfs/*.pdf";

export default {
  data() {
    return { pdfs };
  },
};
</script>
