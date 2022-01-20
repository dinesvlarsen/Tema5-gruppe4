<template>
  <LandingSite :title="getTitle(0)" :lead="getLead(0)" />
  <div class="divider">
    <MainArticles
      :title="getTitle(1)"
      :lead="getLead(1)"
      :image="getImage(1)"
    />
    <MainArticles
      :title="getTitle(2)"
      :lead="getLead(2)"
      :image="getImage(2)"
    />
  </div>
  <Books
    :title="getBookTitle(0)"
    :writers="getBookWriters(0)"
    :cover="getBookCover(0)"
  />
</template>

<script>
import prototypeData from "../../assets/database.js";
import LandingSite from "../components/LandingSite.vue";
import MainArticles from "../components/MainArticles.vue";
import Books from "../components/Books.vue";

export default {
  data() {
    return {
      data: prototypeData,
    };
  },

  methods: {
    // Articles
    getTitle(index) {
      return this.data.articles[index].title;
    },

    getLead(index) {
      return this.data.articles[index].lead;
    },

    getImage(index) {
      return this.data.articles[index].preview.image;
    },

    getArticle(index) {
      return this.data.articles[index].body[0];
    },

    // Books
    getBookTitle(index) {
      return this.data.books[index].title;
    },

    getBookWriters(index) {
      return this.data.books[index].writers;
    },

    getBookCover(index) {
      return this.data.books[index].cover;
    },
  },

  components: {
    LandingSite,
    MainArticles,
    Books,
  },
};
</script>
