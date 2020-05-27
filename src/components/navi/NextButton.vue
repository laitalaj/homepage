<template>
  <navi-button :to="to">
    <transition name="switch" mode="out-in">
      <span :key="text">{{ text }}</span>
    </transition>
    <navi-chevron chevron="chevron-right"></navi-chevron>
  </navi-button>
</template>

<script>
import NaviButton from "./NaviButton";
import NaviChevron from "./NaviChevron";

export default {
  components: {
    "navi-button": NaviButton,
    "navi-chevron": NaviChevron,
  },
  props: {
    to: {
      required: true,
    },
    text: {
      type: String,
    },
  },
};
</script>
