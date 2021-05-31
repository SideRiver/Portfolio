<template>
  <div class="home-wrapper">
    <main>
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
    </main>
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
  margin: 200px 0 0 0;
  background: white;
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
.fa-github:hover {
  color: blueviolet;
  transform: scale(1.2);
}
.fa-youtube:hover {
  color: rgb(235, 50, 35);
  transform: scale(1.2);
}
.fa-twitter:hover {
  color: rgb(74, 161, 235);
  transform: scale(1.2);
}
.icons img {
  background-color: black;
  width: 30px;
  height: auto;
  z-index: 0;
  transition: all 0.3s;
}
.icons img:hover {
  background-color: #21bddb;
  transform: scale(1.2);
}
</style>
