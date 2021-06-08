<template>
  <div class="home-wrapper">
    <h2>News</h2>
    <section class="card">
      <img class="card-img" src="../assets/toppage.png" alt="" />
      <div class="card-content">
        <h1 class="card-title">ポートフォリオを制作しました</h1>
        <p class="card-text">
          未だ未完成ですが公開しました！随時更新していきます
        </p>
      </div>
    </section>
    <div class="about-wrapper">
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
          href="https://twitter.com/wakaran_FMS"
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
        >
          <div><img src="../assets/wantedly_mark_white.png" alt="" /></div
        ></a>
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
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style>
.home-wrapper {
  width: 90%;
  height: 2000px;
  margin: 100px auto;
  background: rgb(255, 255, 255);
}
.home-wrapper h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  text-align: center;
  padding-top: 150px;
  margin-bottom: 10px;
}
.home-wrapper h2::before,
.home-wrapper h2::after {
  content: '';
  width: 70px;
  height: 3px;
  background-color: #75cc75;
}

.home-wrapper h2::before {
  margin-right: 20px;
}
.home-wrapper h2::after {
  margin-left: 20px;
}
.home-wrapper h3 {
  font-size: 30px;
  font-family: sans-serif, Helvetica, Arial;
  font-weight: bolder;
  margin: 10px auto;
}
.home-wrapper #prof {
  margin: 30px 50px 50px 50px;
  width: 250px;
  height: 250px;
}
.home-wrapper h3 {
  font-size: 30px;
  font-family: sans-serif, Helvetica, Arial;
  font-weight: bolder;
  margin: 10px 0px;
}
.home-wrapper p {
  width: 70%;
  font-size: 18px;
  margin: 20px auto;
}

/* カード */
.card {
  margin: 50px auto;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.card-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}
.card-link a {
  text-decoration: none;
  color: #0bd;
  margin: 0 10px;
}
.card-link a:hover {
  color: #0090aa;
}
</style>
