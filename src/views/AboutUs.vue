<template>
  <AboutUs :title="database.title" :body="database.body" />
</template>

<script>
import AboutUs from "../components/AboutUs.vue";
import data from "../../assets/database.js";

export default {
  components: {
    AboutUs,
  },

  data() {
    return {
      database: {
        title: data.pages[0].content.title,
        body: data.pages[0].content.body,
      },
    };
  },
};
</script>