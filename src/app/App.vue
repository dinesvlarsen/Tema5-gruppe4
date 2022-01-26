<template>
  <NewsBanner />
  <RouterView />
  <Footer />
</template>

<script>
import NewsBanner from "../components/NewsBanner.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    NewsBanner,
    Footer,
  },
};
</script>

<style>
@import "../style/fonts.css";
@import "../style/reset.css";
@import "../style/variables.css";
@import "../style/style.css";
</style>
