<template>
  <header>
    <div class="hamburger__icon">
      <img
        src="../../assets/images/header-icons/Hamburger icon.svg"
        alt="header"
      />
    </div>

    <div class="search__icon">
      <img
        src="../../assets/images/header-icons/Search icon.svg"
        alt="header"
      />
    </div>

    <div class="nav">
      <a href="#" class="index__logo">in(dex)</a>

      <div class="slide__nav">
        <a href="#Announcements">Announcements</a>
        <a href="#Journal">Journal</a>
        <a href="#Architecture">Architecture</a>
        <a href="#Video & Film">Video & Film</a>
        <a href="#Live">Live</a>
        <a href="#Notes">Notes</a>
        <a href="#Books">Books</a>
        <a href="#Projects">Projects</a>
        <a href="#Podcasts">Podcasts</a>
        <ul>
          <li>About us</li>
          <br />
          <li>Instagram ↗</li>
          <li>Twitter ↗</li>
          <br />
          <li>in@dex.info</li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 100) {
      this.document.querySelector("header").classList.add("is-scrolling");
    } else {
      this.document.querySelector("header").classList.remove("is-scrolling");
    }
  });

  const menu_btn = document.querySelector(".hamburger__icon");
  const slide_menu = document.querySelector(".slide__nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    slide_menu.classList.toggle("is-active");
  });
};
</script>

<style>
.header {
  position: sticky;
  z-index: 9;
  top: 0;
  left: 0;
}

.hamburger__icon {
  float: right;
  margin: 20px;
  cursor: pointer;
  z-index: 99999;
  position: fixed;
  right: -1px;
}

.search__icon {
  float: right;
  padding: 3px;
  margin: 15px;
  right: 60px;
  cursor: pointer;
  z-index: 99999;
  position: fixed;
}

.index__logo {
  font-size: 30px;
  position: fixed;
  margin-top: 10px;
  z-index: 99999;
  padding-left: 15px;
}

.slide__nav {
  position: relative;
  left: 100%;
  width: 100%;
  display: block;
  background-color: #e3e3e3;
  line-height: 40px;
}

.slide__nav a {
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.slide__nav ul {
  width: 100%;
  max-width: 300px;
  position: absolute;
  top: 5px;
  right: 240px;
}

.slide__nav.is-active {
  left: 0;
  font-size: 30px;
  position: fixed;
}
</style>