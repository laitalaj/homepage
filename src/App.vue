<template>
  <div>
    <bg></bg>
    <div id="app">
      <prev :to="{ name: links.left.to }" :text="links.left.name"></prev>
      <div id="content">
        <transition name="switch" mode="out-in">
          <router-view></router-view>
        </transition>
        <link-icons></link-icons>
      </div>
      <nxt :to="{ name: links.right.to }" :text="links.right.name"></nxt>
    </div>
  </div>
</template>

<script>
import Background from "./components/background/Background";
import PrevButton from "./components/navi/PrevButton";
import NextButton from "./components/navi/NextButton";
import LinkIcons from "./components/links/LinkIcons";

const navigation = ["home", "pdfs", "about"];
const navigationNames = ["Home", "PDFs", "About"];

export default {
  components: {
    bg: Background,
    prev: PrevButton,
    nxt: NextButton,
    "link-icons": LinkIcons,
  },
  computed: {
    links() {
      var currendIdx = navigation.indexOf(this.$route.name);
      if (currendIdx < 0) currendIdx = 0;
      const leftIdx = (currendIdx - 1 + navigation.length) % navigation.length;
      const rightIdx = (currendIdx + 1) % navigation.length;
      return {
        left: {
          name: navigationNames[leftIdx],
          to: navigation[leftIdx],
        },
        right: {
          name: navigationNames[rightIdx],
          to: navigation[rightIdx],
        },
      };
    },
  },
};
</script>

<style lang="stylus">
@require "variables-and-functions"

#app
    position absolute
    width 100%
    height 100%
    left 0
    top 0
    flex-center row, space-evenly
#content
    flex-center column
    background-color content-background-color
    padding 20px 50px
    border-radius 8px
    max-width 60%
.container
    flex-center column
.monospace
    font-family 'Source Code Pro', monospace
.switch-enter, .switch-leave-to
    opacity 0
.switch-enter-active, .switch-leave-active
    transition .2s
h1
    font-family 'Raleway', sans-serif
    font-variant small-caps
    font-size xxx-large
    color text-color
h2
    font-family 'Raleway', sans-serif
    font-variant small-caps
    font-size xx-large
    color text-color
p
    font-family 'Open Sans', sans-serif
    color text-color
    text-align center
a
    font-family 'Open Sans', sans-serif
    color text-color
</style>
