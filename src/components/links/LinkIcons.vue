<template>
  <div class="link-icons">
    <link-icon
      class="link-icon"
      v-for="(icon, index) in icons"
      :key="index"
      v-bind="icon"
    />
  </div>
</template>

<script>
import LinkIcon from "./LinkIcon.vue";

export default {
  components: {
    "link-icon": LinkIcon,
  },
  data() {
    return {
      icons: [
        {
          icon: ["fab", "github-square"],
          link: "https://github.com/laitalaj/",
        },
        {
          icon: ["fab", "linkedin"],
          link: "https://linkedin.com/in/julius-laitala/",
        },
      ],
    };
  },
};
</script>

<style lang="stylus">
@require "../../variables-and-functions"

.link-icons
    flex-center row
    margin 40px 0px
.link-icon
    font-size xx-large
    color text-color
    margin 0px 30px
    transition 0.5s
    &:hover
        font-size xxx-large
</style>
