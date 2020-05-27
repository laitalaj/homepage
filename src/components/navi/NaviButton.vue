<template>
  <router-link class="navi-button" :to="to">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      required: true,
    },
  },
};
</script>

<style lang="stylus">
@require "../../variables-and-functions"

.navi-button
    flex-center row space-around
    width 70px
    height 70px
    padding 5px
    border-radius 50%
    background-color content-background-color
    font-family 'Open Sans', sans-serif
    color text-color
    text-decoration none
    transition 0.5s
    &:hover
        width 85px
        height 85px
        font-size large
</style>
