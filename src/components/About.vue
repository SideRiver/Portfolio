<template>
  <div class="about-wrapper">
    <h2>Profile</h2>
    <img src="../assets/profile.png" id="prof" />
    <h3>SideRiver</h3>
    <p>
      Meiji University, School of Interdisciplinary Mathematical Sciences,
      Department of Frontier Media Science, 3rd year
      <br />
      明治大学 総合数理学部 先端メディアサイエンス学科 3年 (2021年6月現在)
      <br />
      渡邊恵太研究室所属
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
    <h2>Principle</h2>
    <p>
      「インタラクションデザインの観点からヒトとコンピュータとの関係性を捉え直し、最適なサービス設計を考える」をテーマに活動しています。
      サービスの持つ潜在的な問題を、ヒトや製品のバックグラウンドから考え直し、最適な解決方法を提供するということがしたいと考えています。
      ヒトとコンピュータの両側面を理解するため、ヒトの知覚心理やコンピュータサイエンスを学んでいます。
      <br />
      また、既存分野と情報技術の融合にも興味があり、現在は建築情報学なども学んでいます。
    </p>
    <h2>Skills</h2>
    <div id="skill_box">
      <div class="pie p90">HTML</div>
      <div class="pie p80">CSS</div>
      <div class="pie p80">javascript</div>
      <div class="pie p20">typescript</div>
      <div class="pie p50">Vue.js</div>
      <div class="pie p20">Flutter</div>
      <div class="pie p80">UI・UX</div>
      <div class="pie p90">IxD</div>
    </div>
    <h2>certification</h2>
    <p>普通免許</p>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style>
.about-wrapper {
  width: 90%;
  margin: 100px auto;
  background: rgb(255, 255, 255);
}
.about-wrapper h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  text-align: center;
  padding-top: 150px;
  margin-bottom: 10px;
}

.about-wrapper h2::before,
.about-wrapper h2::after {
  content: '';
  width: 70px;
  height: 3px;
  background-color: #75cc75;
}

.about-wrapper h2::before {
  margin-right: 20px;
}
.about-wrapper h2::after {
  margin-left: 20px;
}
.about-wrapper h3 {
  font-size: 30px;
  font-family: sans-serif, Helvetica, Arial;
  font-weight: bolder;
  margin: 10px auto;
}
.about-wrapper #prof {
  margin: 30px 50px 30px 50px;
  width: 250px;
  height: 250px;
}
.about-wrapper p {
  width: 80%;
  font-size: 18px;
  margin: 20px auto 30px auto;
}
.icons {
  display: flex;
  width: 50%;
  margin: auto;
  align-items: center;
  justify-content: space-evenly;
  align-items: flex-start;
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
  height: 30px;
  /* margin-left: 3px; */
  z-index: 0;
  transition: all 0.3s;
  user-select: none; /* CSS3 */
  -moz-user-select: none; /* Firefox */
  -webkit-user-select: none; /* Safari、Chromeなど */
  -ms-user-select: none; /* IE10かららしい */
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

/* 円グラフ */
#skill_box {
  display: flex;
  justify-content: center;
  margin: 20px auto 30px auto;
  flex-flow: row wrap;
}
.pie {
  justify-content: center;
  display: flex;
  align-items: center;
  width: 15vw;
  height: 15vw;
  font-size: 2vw;
  font-weight: 700;
  border-radius: 50%;
  margin: 3vw;
}
.p20 {
  background-image: radial-gradient(#ffffff 60%, transparent 61%),
    conic-gradient(#21bddb 0% 20%, #d9d9d9 20% 100%);
}
.p50 {
  background-image: radial-gradient(#ffffff 60%, transparent 61%),
    conic-gradient(#21bddb 0% 50%, #d9d9d9 50% 100%);
}
.p60 {
  background-image: radial-gradient(#ffffff 60%, transparent 61%),
    conic-gradient(#21bddb 0% 60%, #d9d9d9 60% 100%);
}
.p80 {
  background-image: radial-gradient(#ffffff 60%, transparent 61%),
    conic-gradient(#21bddb 0% 80%, #d9d9d9 80% 100%);
}
.p90 {
  background-image: radial-gradient(#ffffff 60%, transparent 61%),
    conic-gradient(#21bddb 0% 90%, #d9d9d9 90% 100%);
}
</style>
