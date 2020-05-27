<template>
  <a :href="link">
    <font-awesome-icon :icon="icon" />
  </a>
</template>

<script>
export default {
  props: {
    icon: {
      type: [String, Array],
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
