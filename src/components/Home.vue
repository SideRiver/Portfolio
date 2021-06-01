<template>
  <div class="home-wrapper">
    <img src="../assets/profile.png" id="prof" />
    <h3>SideRiver</h3>
    <p>
      Meiji University, School of Interdisciplinary Mathematical Sciences,
      Department of Frontier Media Science, 3rd year
    </p>
    <div class="icons">
      <a
        href="https://github.com/SideRiver"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fab fa-github" aria-hidden="true"></i
      ></a>
      <a
        href="https://twitter.com/SideRiver_works"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fab fa-twitter" aria-hidden="true"></i
      ></a>
      <a
        href="https://www.youtube.com/channel/UCdbW_0R1vb42aJChM9VmZQA"
        target="_blank"
        rel="noopener noreferrer"
        ><i class="fab fa-youtube" aria-hidden="true"></i
      ></a>
      <a
        href="https://www.wantedly.com/id/takuya_yokokawa"
        target="_blank"
        rel="noopener noreferrer"
        ><img src="../assets/wantedly_mark_white.png" alt=""
      /></a>
    </div>
    <div class="MoreBox">
      More→
      <svg
        width="130"
        height="65"
        viewBox="0 0 130 65"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" fill="none" width="130" height="65" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
.home-wrapper {
  width: 100%;
  margin: 200px 0 200px 0;
  background: rgb(255, 255, 255);
}
.home-wrapper #prof {
  margin: 50px;
  width: 300px;
  height: 300px;
}
.home-wrapper h3 {
  font-size: 24px;
  font-family: sans-serif, Helvetica, Arial;
  font-weight: bolder;
  margin: 10px 0px;
}
.home-wrapper p {
  width: 70%;
  font-size: 18px;
  margin: 20px auto;
}
.icons {
  display: flex;
  width: 50%;
  margin: auto;
  align-items: center;
  justify-content: center;
}
.icons a {
  display: flex;
  margin: 20px;
  padding: 5px;
  text-decoration: none;
}
.fab {
  font-size: 30px;
  color: black;
  transition: all 0.3s ease;
}
.fab:hover {
  transform: scale(1.4);
}
.fa-github:hover {
  color: rgb(119, 18, 214);
  /* transform: scale(1.2); */
}
.fa-youtube:hover {
  color: rgb(235, 50, 35);
  /* transform: scale(1.2); */
}
.fa-twitter:hover {
  color: rgb(74, 161, 235);
  /* transform: scale(1.2); */
}
.icons img {
  background-color: black;
  width: 30px;
  height: auto;
  /* margin-left: 3px; */
  z-index: 0;
  transition: all 0.3s;
}
.icons img:hover {
  background-color: #21bddb;
  transform: scale(1.4);
}

/* moreボタン */
.MoreBox {
  width: 130px;
  height: 65px;
  margin: 15px auto;
  color: rgb(0, 0, 0);
  line-height: 65px;
  text-align: center;
  position: relative;
  cursor: pointer;
  font-family: 'proxima-nova', monospace;
  font-size: 18px;
  letter-spacing: 0.07em;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
}
svg rect {
  fill: none;
  stroke: #000000;
  stroke-width: 1;
}

.MoreBox:hover svg rect {
  stroke: #1ec5a9;
}

svg rect {
  stroke-dasharray: 400, 0;
  opacity: 0;
  -webkit-transition: all 0.8s ease-in-out;
  -moz-transition: all 0.8s ease-in-out;
  -ms-transition: all 0.8s ease-in-out;
  -o-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
}
.MoreBox:hover svg rect {
  opacity: 1;
  stroke-width: 7;
  stroke-dasharray: 35, 245;
  stroke-dashoffset: 38;
  -webkit-transition: all 0.8s ease-in-out;
  -moz-transition: all 0.8s ease-in-out;
  -ms-transition: all 0.8s ease-in-out;
  -o-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
}
</style>
