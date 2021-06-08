<template>
  <div id="Contact">
    <p class="first">Coming Soon...</p>
    <p class="second">
      現在製作中です。<a
        href="https://sideriver.studio.site/#contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        こちら
      </a>
      よりご連絡お願い致します
    </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style>
#Contact {
  /* margin: 200px 0 0 0; */
  margin: 0;
  width: 100%;
  height: 1000px;
  background-color: rgb(255, 255, 255);
}
.second {
  font-size: 2vw;
}
.second a {
  text-decoration: none;
  color: rgb(5, 168, 114);
}
.first {
  color: rgb(5, 168, 114);
  font-size: 5vw;
  padding-top: 100px;
}
</style>
