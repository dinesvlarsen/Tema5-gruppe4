<template>
  <section class="books">
    <p class="books__title">Books</p>
    <div v-for="bla in books" class="books__grid">
      <div class="grid__items">
        <img src="../../assets/images/book_6.jpeg" alt="" />
        <p>{{ title }}</p>
        <p>{{ writers }}</p>
      </div>
    </div>
  </section>
</template>


<script>
import prototypeData from "../../assets/database.js";

export default {
  props: ["title", "writers", "cover"],

  data() {
    return {
      books: {
        title: prototypeData.books.title,
        writers: prototypeData.books.writers,
        cover: prototypeData.books.cover,
      },
    };
  },
  computed: {
    imageLink() {},
  },
};
</script>

<style>
.books__title {
  margin: 3em auto 0.5em;
  text-align: center;
  font-size: 30px;
}

.books__grid {
  display: grid;
  column-gap: 1rem;
  row-gap: 100px;
  margin: 0 1rem;
  grid-template-columns: 1fr 1fr 1fr;
}

.grid__items {
  display: grid;
}
</style>