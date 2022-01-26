<template>
  <body>
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
      <a href="#home" class="active">In(dex)</a>

      <div id="myLinks">
        <a href="#Announchements">Announchements</a>
        <a href="#Journal">Journal</a>
        <a href="#Architecture">Architecture</a>
        <a href="#Video & Film">Video & Film</a>
        <a href="#Live">Live</a>
        <a href="#Notes">Notes</a>
        <a href="#Books">Books</a>
        <a href="#Projects">Projects</a>
        <a href="#Podcasts">Podcasts</a>
      </div>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </body>
</template>

<style>
.hamburger__icon {
  width: 40px;
  float: right;
  padding: 2px;
  margin: 20px;
}

.search__icon {
  width: 35px;
  float: right;
  padding: 3px;
  margin: 15px;
}

.nav {
  overflow: hidden;
  background-color: white;
  position: relative;
}

.nav #myLinks {
  display: none;
}

.nav a {
  color: black;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 25px;
  display: block;
}
</style>


<script>
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
</script>