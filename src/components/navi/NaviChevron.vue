<template>
  <font-awesome-icon
    class="chevron"
    :icon="['fas', chevron]"
  ></font-awesome-icon>
</template>

<script>
export default {
  props: {
    chevron: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.chevron
    font-size large
</style>
