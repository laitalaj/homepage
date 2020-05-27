<template>
  <div id="background" :style="background"></div>
</template>

<script>
import TWEEN from "@tweenjs/tween.js";

const baseColor = "black";
const backgroundColors = {
  home: [
    { r: 128, g: 80, b: 48 },
    { r: 64, g: 64, b: 128 },
  ],
  about: [
    { r: 40, g: 128, b: 40 },
    { r: 64, g: 64, b: 128 },
  ],
  pdfs: [
    { r: 128, g: 64, b: 64 },
    { r: 200, g: 150, b: 0 },
  ],
  notfound: [
    { r: 80, g: 30, b: 0 },
    { r: 100, g: 20, b: 20 },
  ],
  teapot: [
    { r: 255, g: 0, b: 0 },
    { r: 0, g: 255, b: 0 },
    { r: 0, g: 0, b: 255 },
  ],
};
const bgTransitionDuration = 1800;

export default {
  data() {
    return {
      tweenedStyles: [],
    };
  },

  methods: {
    tweenBackground() {
      const animate = () => {
        if (TWEEN.update()) requestAnimationFrame(animate);
      };
      const tweens = Math.max(
        this.tweenedStyles.length,
        this.backgroundStyles.length
      );
      for (let i = 0; i < tweens; i++) {
        const target =
          this.backgroundStyles.length > i
            ? this.backgroundStyles[i]
            : { ...this.tweenedStyles[i], r: 0, g: 0, b: 0, cutoff: 0 };
        if (this.tweenedStyles.length <= i) {
          this.tweenedStyles.push({
            ...this.backgroundStyles[i],
            r: 0,
            g: 0,
            b: 0,
            cutoff: 0,
          });
        }
        if (Math.abs(this.tweenedStyles[i].angle - target.angle) > 180) {
          this.tweenedStyles[i].angle +=
            360 * (target.angle > this.tweenedStyles[i].angle ? 1 : -1);
        }
        new TWEEN.Tween(this.tweenedStyles[i])
          .to(target, bgTransitionDuration)
          .easing(TWEEN.Easing.Quadratic.InOut)
          .start();
      }
      animate();
    },
  },

  created() {
    this.tweenBackground();
  },

  computed: {
    backgroundStyles() {
      const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;
      return backgroundColors[this.$route.name].map((r) => {
        return { ...r, angle: rand(0, 359), cutoff: rand(50, 80) };
      });
    },
    background() {
      const grad = (style) =>
        `linear-gradient(${style.angle}deg,` +
        `rgb(${style.r},${style.g},${style.b}),` +
        `rgba(0, 0, 0, 0) ${style.cutoff}%)`;
      const bgStyle = this.tweenedStyles.map(grad);
      bgStyle.push(baseColor);
      return { background: bgStyle.join(",") };
    },
  },

  watch: {
    backgroundStyles() {
      this.tweenBackground();
    },
  },
};
</script>

<style lang="stylus">
#background
    position absolute
    width 100%
    height 100%
    left 0
    top 0
</style>
