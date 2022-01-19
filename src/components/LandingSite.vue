<template>
  <section class="landingSite">
    <p class="landingSite__latest">Latest</p>
    <!--Router link skal rundt h1 og p-->
    <h1 class="landingSite__header">{{ title }}</h1>
    <p class="landingSite__paragraph">
      {{ lead }}
    </p>
    <img class="landingsite__image" :src="imageLink" />
  </section>
</template>

<script>
import prototypeData from "../../assets/database.js";

export default {
  props: ["title", "lead", "image"],
  data() {
    return {
      firstArticle: {
        title: prototypeData.articles[0].title,
        lead: prototypeData.articles[0].lead,
        body: prototypeData.articles[0].body,
        slug: prototypeData.articles[0].slug,
        preview: prototypeData.articles[0].preview,
      },
    };
  },

  computed: {
    imageLink() {
      return "../../assets/images/article_1.jpeg";
    },
  },
};
</script>

<style>
.landingSite {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.landingSite__latest {
  margin: 0.5em auto;
  font-size: 30px;
}

.landingSite__header {
  margin: 0.5em auto;
  font-size: 50px;
  max-width: 27ch;
}

.landingSite__paragraph {
  margin: 0.5em 1em 0.5em;
  font-size: 20px;
}

.landingSite__image {
  width: 96%;
  margin: 0.5em auto;
}

@media screen and (min-width: 968px) {
  .landingSite__image {
    width: 70%;
  }

  .landingSite__paragraph {
    max-width: 60ch;
    margin: 0.5em auto;
  }
}
</style>
