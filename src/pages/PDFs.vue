<template>
  <span class="container">
    <h1>Stuff I've written</h1>
    <div class="pdf-links">
      <pdf-link
        v-for="name in Object.keys(pdfs)"
        :key="name"
        :pdf="pdfs[name]"
        :thumb="thumbs[name]"
        :title="titles[name]"
        :subtitle="subtitles[name]"
      ></pdf-link>
    </div>
  </span>
</template>

<script>
import PDFLink from "../components/pdf/PDFLink";

import pdfs from "../../assets/pdfs/*.pdf";
import thumbs from "../../assets/thumbnails/*.png";

export default {
  components: {
    "pdf-link": PDFLink,
  },
  data() {
    return {
      pdfs,
      thumbs,
      titles: {
        nopemon:
          "GAN: Improving the Generator Architecture in Image Generation from Noise",
        kandi: "Hidden Markov models for gene prediction",
        nerails: "Analysis of Northern Europe's Rail Network",
        pulsarization:
          "Designing and Implementing an Interactive Visualization",
      },
      subtitles: {
        kandi: "Written in Finnish",
        nerails: "Written with a couple of friends",
      },
    };
  },
};
</script>

<style lang="stylus">
@require '../variables-and-functions'

.pdf-links
    width 100%
    flex-center row
</style>
