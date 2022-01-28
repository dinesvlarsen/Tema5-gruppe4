<template>
  <section class="news-banner">
    <p class="news-banner__announcement">
      {{ message }}
    </p>
  </section>
</template>

<script>
import data from "/assets/database.js";

export default {
  data() {
    return {
      message: data.announcement.message,
    };
  },
};
</script>

<style>
.news-banner {
  background: var(--highlight-color);
  width: 100%;
  height: 62px;
  padding: 11px;
  overflow: hidden;
}

.news-banner__announcement {
  white-space: nowrap;
  animation: animatedNewsBanner 40s linear infinite;
}

@keyframes animatedNewsBanner {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-210%);
  }
}

@media screen and (min-width: 968px) {
  .news-banner__announcement {
    animation: animatedNewsBanner 50s linear infinite;
  }
  
  @keyframes animatedNewsBanner {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(-130%);
    }
  }
}

@media screen and (max-width: 500px) {
  .news-banner {
    height: 42px;
    padding-top: 11px;
  }
}
</style>