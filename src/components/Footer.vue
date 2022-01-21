<template>
  <footer class="footer-container">
    <h3>in(dex)</h3>
    <div class="footer-container-menu">
      <div>
        <ul>
          <li>172 Classon Avenue</li>
          <li>Brooklyn, NY 11205</li>
          <li>USA</li>
        </ul>
      </div>
      <div>
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
  </footer>
</template>

<script>
  export default {};
</script>

<style scoped>
  .footer-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    font-family: JetBrains Mono;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    height: 289px;
    width: 1936px;
    left: 0px;
    top: 1498px;
    border-radius: 0px;
  }
  .footer-container-menu {
    display: flex;
    gap: 3rem;
    padding:0px;
  }
  ul {
    list-style: none;
  }
</style>
