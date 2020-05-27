<template>
  <a class="pdf-link" :href="pdf">
    <img class="pdf-thumb" :src="thumb" :alt="`Thumbnail for ${pdf}`" />
    <br />
    {{ title }}
    <br />
    <p class="pdf-sub" v-if="subtitle">{{ subtitle }}</p>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    pdf: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="stylus">
@require '../../variables-and-functions'

.pdf-link
    background-color content-background-color
    padding 10px
    margin 0px 10px
    width 10vw
    height 25vh
    border-radius 8px
    font-size small
    text-decoration none
    text-align center
    overflow hidden
    transition 0.5s
    &:hover
        font-size medium
        width 12vw
        height 30vh
.pdf-thumb
    width 100%
.pdf-sub
    font-size x-small
</style>
